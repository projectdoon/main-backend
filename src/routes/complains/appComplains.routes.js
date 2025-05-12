import express from "express";
import complainController from "../../controllers/complains.controller.js";
import verifyToken from "../../generals/middlewares/verifyToken.js";

const router = express.Router();

router.post(
  "/register",
  verifyToken,
  complainController.registerUserComplain
);

router.get("/getComplainList", verifyToken, complainController.getUserComplain);

export default router;
