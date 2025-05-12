import express from 'express';
import UserController from '../../controllers/user.controller.js';
import verifyToken from '../../generals/middlewares/verifyToken.js';

const router = express.Router();

router.get('/getDetails', verifyToken, UserController.getUserDetails);

export default router;