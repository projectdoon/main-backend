import express from "express";
import {
  registerUserComplain,
  getUserComplain
} from "../../controllers/complains.controller.js";
import verifyToken from '../../middlewares/verifyToken.js';

const router = express.Router();

router.post('/complainreg', verifyToken, registerUserComplain);
router.post('/getComplainList', verifyToken, getUserComplain);

export default router;
