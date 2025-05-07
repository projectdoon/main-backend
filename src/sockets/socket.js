const { Server } = require("socket.io");
const admin = require("firebase-admin");
const prisma = require('./db.js'); 

const serviceAccount = require('../mydoonapp-4ccea-3d05a37b7e75.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

async function setupSocket(server) {
    try {
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
        setupPrismaSubscription(io);

        console.log("websocket and Prisma subscription setup complete");
    } catch (error) {
        console.error("error setting up web socket", error);
    }
}

// Function to handle Prisma subscriptions
async function setupPrismaSubscription(io) {
    // Initial setup - get the latest alert ID to track new entries
    let latestAlert = await prisma.alert.findFirst({
        orderBy: {
            id: 'desc'
        }
    });
    
    let lastCheckedId = latestAlert ? latestAlert.id : 0;
    
    // Poll for new alerts every second
    setInterval(async () => {
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
                // Update our tracking ID
                lastCheckedId = newAlerts[newAlerts.length - 1].id;
                
                // Process each new alert
                for (const alert of newAlerts) {
                    const newAlert = alert.alert; // Assuming the text is in a field called "alert"
                    console.log(newAlert);
                    io.emit("newAlert", newAlert);
                    
                    // Send push notification using FCM API v1
                    const message = {
                        notification: {
                            title: "",
                            body: newAlert,
                        },
                        topic: "all_users",
                    };
                    
                    try {
                        await admin.messaging().send(message);
                        console.log("FCM notification sent successfully");
                    } catch (error) {
                        console.error("error sending FCM notification:", error);
                    }
                }
            }
        } catch (error) {
            console.error("Error checking for new alerts:", error);
        }
    }, 1000); // Check every second
}

// module.exports = setupSocket;
export default setupSocket;