import express from 'express';
// import { getServerIp } from '../controller/ipcontroller.js';
import ipController from '../../controllers/ip.controller.js';
const router = express.Router();

router.get('/server-ip', ipController.getServerIp);

export default router;