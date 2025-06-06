import prisma from "../db.js";

class PropertyService {
  async createProperty(data) {
    try {
      return await prisma.property.create({ data });
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAllProperties() {
    try {
      return await prisma.property.findMany();
    } finally {
      await prisma.$disconnect();
    }
  }

  async getPropertyById(id) {
    try {
      return await prisma.property.findUnique({ where: { id } });
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new PropertyService();
