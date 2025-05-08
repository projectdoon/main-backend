import express from "express";
import complainController from "../../controllers/complains.controller.js";
// import {
//   registerUserComplain,
//   getUserComplain
// } from "../../controllers/complains.controller.js";
import verifyToken from "../../middlewares/verifyToken.js";

const router = express.Router();

router.post(
  "/register",
  // verifyToken,
  complainController.registerUserComplain
);
router.post(
  "/getComplainList",
  // verifyToken,
  complainController.getUserComplain
);

export default router;
