import express from "express";
import propertyController from "../../controllers/property/property.controller.js";

const router = express.Router();

router.post("/create", propertyController.createProperty);
router.get("/getAll", propertyController.getAllProperties);
router.get("/:id", propertyController.getPropertyById);

export default router;
