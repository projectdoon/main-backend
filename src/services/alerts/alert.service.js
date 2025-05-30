import prisma from "../db.js";

class AlertService {
  async getAllAlerts() {
    try {
      return await prisma.alert.findMany({
        select: {
          id: true,
          alert: true,
          category: true,
        },
      });
    } catch (err) {
      console.error("Error fetching all alerts:", err);
      throw err;
    }
  }

  async createAlert({ alert, category }) {
    try {
      return await prisma.alert.create({
        data: {
          alert,
          category,
        },
      });
    } catch(err) {
      console.log('failed to create the alert', err);
      throw err
    }
  }

  //app
  async getAlerts() {
    try {
      const data = await prisma.alert.findFirst({
        orderBy: {
          id: 'desc'
        }
      });
      
      console.log("Latest Alert Data fetched");

      if (data) {
        return data;
      } else {
        console.log("No alerts found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching alerts:", error);
      throw error;
    } 
  }

  async getAllAlertsData() {
    try {
      const allAlerts = await prisma.alert.findMany({
        select: {
          alert: true
        }
      });
      
      return allAlerts
    } catch (error) {
      console.error("Error fetching alerts:", error);
      throw error;
    } 
  }
}


export default new AlertService();
