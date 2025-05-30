import express from "express";
import projectController from "../../controllers/capa/project.controller.js";

const router = express.Router();

router.get("/getAllProjects", projectController.getProjects);
router.get("/:projectID", projectController.getProjectById);
export default router;
