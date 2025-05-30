import { Server } from "socket.io";
import admin from 'firebase-admin';
import prisma from "../services/db.js";
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function setupSocket(server) {
    try {
        // Load service account file
        const serviceAccount = JSON.parse(
            await readFile(join(__dirname, '../../mydoonapp-4ccea-3d05a37b7e75.json'), 'utf8')
        );
        
        // Initialize Firebase admin if not already initialized
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        }

        console.log("Using existing Prisma client for web sockets");

        // Initialize Socket.io server
        const io = new Server(server, {
            cors: {
                origin: '*',
            },
        });

        io.on("connection", (socket) => {
            console.log("client connected:", socket.id);

            socket.on("disconnect", () => {
                console.log("client disconnected:", socket.id);
            });
        });

        // Set up subscription for alerts using Prisma
        await setupPrismaSubscription(io);

        console.log("websocket and Prisma subscription setup complete");
    } catch (error) {
        console.error("Error setting up web socket:", error);
    }
}

// Function to handle Prisma subscriptions
async function setupPrismaSubscription(io) {
    try {
        // Initial setup - get the latest alert ID to track new entries
        let latestAlert = await prisma.alert.findFirst({
            orderBy: {
                id: 'desc'
            }
        });
        
        let lastCheckedId = latestAlert ? latestAlert.id : 0;
        console.log(`Starting alert monitoring from ID: ${lastCheckedId}`);
        
        // Poll for new alerts every second
        const intervalId = setInterval(async () => {
            try {
                // Find any alerts newer than the last one we processed
                const newAlerts = await prisma.alert.findMany({
                    where: {
                        id: {
                            gt: lastCheckedId
                        }
                    },
                    orderBy: {
                        id: 'asc'
                    }
                });
                
                if (newAlerts.length > 0) {
                    console.log(`Found ${newAlerts.length} new alerts`);
                    
                    // Update our tracking ID
                    lastCheckedId = newAlerts[newAlerts.length - 1].id;
                    
                    // Process each new alert
                    for (const alert of newAlerts) {
                        // Adjust field name based on your PostgreSQL schema
                        // If your alert field is called "Alert" in the database:
                        const newAlert = alert.alert;
                        
                        if (newAlert) {
                            console.log(`Emitting new alert: ${newAlert}`);
                            // io.emit("newAlert", newAlert);

                            io.emit("newAlert", {
                              id: alert.id,
                              message: alertMessage,
                              category: alert.category,
                              timestamp: new Date().toISOString()
                            });
                            // Send push notification using FCM API v1
                            const message = {
                                notification: {
                                    title: "New Alert",
                                    body: newAlert,
                                },
                                topic: "all_users",
                            };
                            
                            try {
                                await admin.messaging().send(message);
                                console.log("FCM notification sent successfully");
                            } catch (error) {
                                console.error("Error sending FCM notification:", error);
                            }
                        } else {
                            console.warn("Alert object missing 'Alert' field:", alert);
                        }
                    }
                }
            } catch (error) {
                console.error("Error checking for new alerts:", error);
            }
        }, 5000); // Check every second
        
        // Handle cleanup to prevent memory leaks
        process.on('SIGINT', () => {
            clearInterval(intervalId);
            process.exit(0);
        });
    } catch (error) {
        console.error("Error setting up Prisma subscription:", error);
    }
}

export default setupSocket;