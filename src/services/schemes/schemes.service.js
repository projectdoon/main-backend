import prisma from "../db.js";

class SchemeService {
  async createScheme({ name, description, url, category }) {
    return await prisma.scheme.create({
      data: {
        name,
        description,
        url,
        category,
      },
    });
  }

  async getAllSchemes() {
    return await prisma.scheme.findMany();
  }

  async disconnect() {
    await prisma.$disconnect();
  }
}

module.exports = new SchemeService();
