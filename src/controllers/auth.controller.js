import AuthServices from '../services/auth/auth.services.js';

class Authcontroller {
  async register (req, res, next) {
    try {
      const { phoneNo, firstName, lastName, Lat, Long, email } = req.body;
      const successRes = await AuthServices.registerUser(phoneNo, firstName, lastName, Lat, Long, email);
      if (!successRes) {
          return res.status(400).json({ status: false, message: 'User registration failed' });
      }
      let tokenData = { id: successRes.id, phoneNo: successRes.phoneNo, firstName: successRes.firstName };
      const token = await AuthServices.generateToken(tokenData, 'secretkey', '1h');
      res.json({ status: true, token: token, success: "user registered successfully" });
    } catch (error) {
      res.status(500).json({ status: false, message: 'Internal server error', error: error.message });
    }
  }


  async login (req, res, next) {
    try {
      const { phoneNo } = req.body;
      const user = await AuthServices.checkUser(phoneNo);
      if (!user) {
        return res.status(200).json({ status: false, message: 'user not found' });
      }
      let tokenData = { id: user.id, phoneNo: user.phoneNo, firstName: user.firstName };
      const token = await AuthServices.generateToken(tokenData, 'secretkey', '1h');
      res.status(200).json({ status: true, token: token });
    } catch (error) {
      res.status(500).json({ status: false, message: 'Internal server error', error: error.message });
    }
  }
}

export default new Authcontroller();