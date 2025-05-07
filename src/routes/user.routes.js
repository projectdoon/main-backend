// const router = require('express').Router();
// const UserController = require('../controller/user_controller');
import router from 'express';
import UserController from '../controllers/user.controller';

router.Router()
router.post('/registration', UserController.register);
router.post('/login', UserController.login);

// module.exports = router;
export default router;