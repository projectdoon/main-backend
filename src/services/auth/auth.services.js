import jwt from 'jsonwebtoken'
import prisma from '../db.js';

class AuthServices {
  async registerUser(phoneNo, firstName, lastName, Lat, Long, email) {
    try {
      return await prisma.user.create({
        data: {
          phoneNo,
          firstName,
          lastName,
          Lat,
          Long,
          email
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async checkUser(phoneNo) {
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

  async generateToken(tokenData, secretKey, jwt_expire) {
    return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
  }
}

export default new AuthServices();