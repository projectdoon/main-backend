import express from "express";
import AlertController from "../../controllers/alerts.controller.js";
import verifyToken from '../../middlewares/verifyToken.js';
const router = express.Router();

//app
router.get('/latest', verifyToken, AlertController.fetchAlert);
router.get('/alertData', verifyToken, AlertController.getAllAlerts);

export default router;