const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class UserServices {
  static async registerUser(phoneNo, firstName, lastName, Lat, Long, email) {
    try {
      return await prisma.user.create({
        data: {
          phoneNo,
          firstName,
          lastName,
          lat: Lat ? parseFloat(Lat) : null,
          long: Long ? parseFloat(Long) : null,
          email
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async checkUser(phoneNo) {
    try {
      return await prisma.user.findUnique({
        where: {
          phoneNo
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async generateToken(tokenData, secretKey, jwt_expire) {
    return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
  }
}

module.exports = UserServices;