import prisma from "../db.js";

class ProjectDateService {
  async createProjectDate(data) {
    try {
      return await prisma.projectDate.create({ data });
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAllProjectDates() {
    try {
      return await prisma.projectDate.findMany({
        include: { project: true },
      });
    } finally {
      await prisma.$disconnect();
    }
  }
  async getProjectDatesByProjectId(projectID) {
    try {
      return await prisma.projectDate.findMany({
        where: { projectID: Number(projectID) },
      });
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new ProjectDateService();
