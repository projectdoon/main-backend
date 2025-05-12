import prisma from "../services/db.js";
import UserServices from '../services/user/user.services.js'

class UserController {
    async getUserDetails(req,res) {
        try {
            const { id } = req.user;
            if (!id) {
                return res.status(400).json({ 
                  status: false, 
                  message: 'User ID not found in token' 
                });
            }
            const user = await UserServices.getUserDetailsById(id);
            return res.status(200).json({
                status: true,
                user: user
            });
        } catch (error) {
            console.error('Error fetching user details:', error);
            return res.status(500).json({
                status: false,
                message: 'Internal server error',
                error: error.message
            });
        }
    }
}

export default new UserController();