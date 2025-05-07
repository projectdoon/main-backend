import express from 'express';
import { getServerIp } from '../controller/ipcontroller.js';

const router = express.Router();

router.get('/server-ip', getServerIp);

export default router;