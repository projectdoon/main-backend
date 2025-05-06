import alertService from "../services/alerts/alert.service.js";

class AlertController {
  async getAllAlerts(req, res) {
    try {
      const alerts = await alertService.getAllAlerts();
      res.status(200).json(alerts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  }

  async createAlert(req, res) {
    const { alert, category } = req.body;

    if (!alert || !category) {
      return res.status(400).json({ error: "Alert and category are required" });
    }

    try {
      const newAlert = await alertService.createAlert({ alert, category });
      res.status(201).json(newAlert);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new AlertController();


// const { getAllAlerts, addAlert } = require("../models/alerts/alerts.model");

// async function httpgetAllAlerts(req, res) {
//   const alerts = await getAllAlerts();
//   return res.status(200).json(alerts);
// }

// async function httpAddAlert(req, res) {
//   const { Alert, category } = req.body; // Destructure Alert and category from request body
//   if (!Alert || !category) {
//     return res.status(400).json({ error: "Alert and category are required" });
//   }

//   try {
//     const newAlert = await addAlert({ Alert, category }); // Pass the category to addAlert
//     return res.status(201).json(newAlert);
//   } catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// }

// module.exports = {
//   httpgetAllAlerts,
//   httpAddAlert,
// };
