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
    try {
      const schemes = await prisma.scheme.findMany({
        orderBy: {
          name: 'asc'
        }
      });
      
      return schemes;
    } catch (error) {
      console.error('Error in getAllSchemes service:', error);
      throw error;
    }
  }

  async disconnect() {
    await prisma.$disconnect();
  }
}

export default new SchemeService();
