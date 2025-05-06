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
}

export default new AlertService();
