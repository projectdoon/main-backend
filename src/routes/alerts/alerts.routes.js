// const express = require('express');
// const { httpgetAllAlerts, httpAddAlert } = require('../../controllers/alerts.controller');

// const AlertsRouter = express.Router();

// AlertsRouter.get('/', httpgetAllAlerts);
// AlertsRouter.post('/', httpAddAlert);

// module.exports = AlertsRouter;

import express from "express";
import AlertController from "../../controllers/alerts.controller";

const AlertsRouter = express.Router();

// Updated to use class methods from AlertController
AlertsRouter.get("/", AlertController.getAllAlerts);
AlertsRouter.post("/", AlertController.createAlert);

export default AlertsRouter;