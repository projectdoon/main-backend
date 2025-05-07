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
    } finally {
      await prisma.$disconnect();
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
    } finally {
      await prisma.$disconnect();
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
    } finally {
      await prisma.$disconnect();
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
    } finally {
      await prisma.$disconnect();
    }
  }
}


export default new AlertService();
