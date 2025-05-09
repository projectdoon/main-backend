import prisma from "../db.js";
import projectDateService from "./projectDate.service.js";

class ProjectService {
  async createProject(data) {
    try {
      return await prisma.project.create({ data });
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAllProjects() {
    try {
      return await prisma.project.findMany({
        include: { projectDates: true },
      });
    } finally {
      await prisma.$disconnect();
    }
  }
  async getProjectById(projectID) {
      try {
      const project = await prisma.project.findUnique({
        where: { id: Number(projectID) },
      });
      if (!project) {
        return null;
      }
      const dates = await projectDateService.getProjectDatesByProjectId(
        projectID
      );
      return {
        ...project,
        dates,
      };
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new ProjectService();
