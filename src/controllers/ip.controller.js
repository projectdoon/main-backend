import { getLocalIP } from '../services/ipServices.js';

export const getServerIp = (req, res) => {
    res.json({ ip: getLocalIP() });
};