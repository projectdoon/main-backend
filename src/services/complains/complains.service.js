// import prisma from '../db.js';

// export async function registerComplain(userId, Category, Description, Imageurl, Status, Burst, Lat, Long) {
//     try {
//         return await prisma.complain.create({
//             data: {
//                 userId,
//                 Category,
//                 Description,
//                 Imageurl,
//                 Status,
//                 Burst,
//                 Lat,
//                 Long
//             }
//         });
//     } catch (error) {
//         throw error;
//     }
// }

// export async function getComplainData(userId) {
//     try {
//         return await prisma.complain.findMany({
//             where: {
//                 userId: userId
//             },
//             include: {
//                 user: {
//                     select: {
//                         firstName: true,
//                         lastName: true,
//                         phoneNo: true,
//                         email: true
//                     }
//                 }
//             }
//         });
//     } catch (error) {
//         throw error;
//     }
// }

import prisma from "../db.js";

class ComplainService {
  async getComplaintsByCategory(category) {

    return await prisma.complain.findMany({
      where: { Category: category },
    });
  }

  async getAllComplaints() {
    return await prisma.complain.findMany();
  }

  async getComplaintById(id) {
    try {
      return await prisma.complain.findUnique({
        where: {
          id: id
        }
      });
    } catch (error) {
      console.error('Error in getComplaintById service:', error);
      throw error;
    }
  }

  async markComplaintAsSolved({ id }) {
    return await prisma.complain.update({
      where: { id },
      data: { Burst: 1 },
    });
  }

  async registerComplain(
    userId,
    Category,
    Description,
    Imageurl,
    Status,
    Burst,
    Lat,
    Long,
  ) {
    try {
      return await prisma.complain.create({
        data: {
          userId,
          Category,
          Description,
          Imageurl,
          Status,
          Burst,
          Lat,
          Long,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getComplainData({ userId }) {
    try {
      return await prisma.complain.findMany({
        where: {
          userId: userId,
        },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              phoneNo: true,
              email: true,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateComplaintStatus(id) {
    try {
      return await prisma.complain.update({
        where: {
          id: id
        },
        data: {
          Status: 2
        }
      });
    } catch (error) {
      console.error('Error in updateComplaintStatus service:', error);
      throw error;
    }
  }

  async updateComplaintBurst(id) {
    try {
      return await prisma.complain.update({
        where: {
          id: id
        },
        data: {
          Burst: 2
        }
      });
    } catch (error) {
      console.error('Error in updateComplaintBurst service:', error);
      throw error;
    }
  }

  async disconnect() {
    await prisma.$disconnect();
  }
}

export default new ComplainService();
