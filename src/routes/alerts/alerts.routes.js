import express from "express";
import AlertController from "../../controllers/alerts.controller.js";
const AlertsRouter = express.Router();

// Updated to use class methods from AlertController
AlertsRouter.get("/", AlertController.getAllAlertsAdmin);
AlertsRouter.post("/", AlertController.createAlert);


export default AlertsRouter;