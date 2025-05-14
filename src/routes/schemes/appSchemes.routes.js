import express from 'express';
import schemeController from "../../controllers/SchemesController.js";

const router = express.Router();

router.get("/getAllSchemes", schemeController.getAllSchemes);

export default router;