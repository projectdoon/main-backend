import jwt from 'jsonwebtoken'
import prisma from '../db.js';

class UserServices {
    async getUserDetailsById(userId) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                  id: userId
                },
            });
            console.log(user);
            
            return user;
        } catch (error) {
            console.log('error in user getUserDetails service: ', error);
            throw error
        }
    }
}

export default new UserServices();