import UserServices from '../services/user/user.services';
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime');

exports.register = async (req, res, next) => {
  try {
    const { phoneNo, firstName, lastName, Lat, Long, email } = req.body;
    const successRes = await UserServices.registerUser(phoneNo, firstName, lastName, Lat, Long, email);
    if (!successRes) {
        return res.status(400).json({ status: false, message: 'User registration failed' });
    }
    let tokenData = { id: successRes.id, phoneNo: successRes.phoneNo, firstName: successRes.firstName };
    const token = await UserServices.generateToken(tokenData, 'secretkey', '1h');
    res.json({ status: true, token: token, success: "user registered successfully" });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // Handle Prisma specific errors
      if (error.code === 'P2002') {
        return res.status(400).json({ 
          status: false, 
          message: `User with this ${error.meta.target[0]} already exists` 
        });
      }
    }
    res.status(500).json({ status: false, message: 'Internal server error', error: error.message });
  }
}

exports.login = async (req, res, next) => {
  try {
    const { phoneNo } = req.body;
    const user = await UserServices.checkUser(phoneNo);
    if (!user) {
      return res.status(200).json({ status: false, message: 'user not found' });
    }
    let tokenData = { id: user.id, phoneNo: user.phoneNo, firstName: user.firstName };
    const token = await UserServices.generateToken(tokenData, 'secretkey', '1h');
    res.status(200).json({ status: true, token: token });
  } catch (error) {
    res.status(500).json({ status: false, message: 'Internal server error', error: error.message });
  }
}