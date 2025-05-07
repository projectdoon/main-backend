import os from 'os';

export function getLocalIP() {
    const interfaces = os.networkInterfaces();

    for (let iface in interfaces) {
        for (let alias of interfaces[iface]) {
            if (alias.family === 'IPv4' && !alias.internal) {
                return alias.address;
            }
        }
    }

    return '127.0.0.1';
}