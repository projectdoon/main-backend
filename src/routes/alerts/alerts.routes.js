import express from "express";
import AlertController from "../../controllers/alerts.controller.js";
import verifyToken from '../../middlewares/verifyToken.js';
const AlertsRouter = express.Router();

// Updated to use class methods from AlertController
AlertsRouter.get("/", AlertController.getAllAlerts);
AlertsRouter.post("/", AlertController.createAlert);

//app
AlertsRouter.get('/alert', verifyToken, AlertController.fetchAlert);
AlertsRouter.get('/alertData', verifyToken, AlertController.getAlerts);

export default AlertsRouter;