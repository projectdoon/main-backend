import http from 'http';
import app from './app.js';
import setupSocket from './sockets/socket.js';

const port = process.env.PORT || 8000;


const server = http.createServer(app);
setupSocket(server);

async function startServer() {
    try {
        server.listen(port, () => {
            console.log(`Listening on port ${port}...`);
        });
    } catch (err) {
        console.error(`Error starting the server: ${err}`);
    }
}

startServer();
