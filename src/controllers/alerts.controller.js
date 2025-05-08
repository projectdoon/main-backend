import alertService from "../services/alerts/alert.service.js";

class AlertController {
  async getAllAlertsAdmin(req, res) {
    try {
      const alerts = await alertService.getAllAlerts();
      res.status(200).json(alerts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  }

  async createAlert(req, res) {
    const { Alert, category } = req.body;

    if (!Alert || !category) {
      return res.status(400).json({ error: "Alert and category are required" });
    }

    try {
      const newAlert = await alertService.createAlert({ alert:Alert, category });
      res.status(201).json(newAlert);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // app
  async fetchAlert(req, res, next) {
    try {
      const data = await alertService.getAlerts();
      
      if (!data) {
        return res.status(400).json({ status: false, message: "alert failed" });
      }
      
      res.json({ status: true, success: "alertsuccessfully", tokendata: data.alert });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "alert Internal server error",
        error: error.message,
      });
    }
  }

  async getAllAlerts(req, res, next) {
    try {
      const alerts = await alertService.getAllAlertsData();
      
      if (!alerts || alerts.length === 0) {
        return res.status(400).json({ status: false, message: 'failed to get alerts' });
      }
      
      res.json({ status: true, success: alerts });
    } catch (error) {
      res.status(500).json({ status: false, message: 'alert Internal server error', error: error.message });
    }
  }

}

export default new AlertController();

