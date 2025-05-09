import express from "express";
import projectController from "../../controllers/capa/project.controller.js";
import projectDateController from "../../controllers/capa/projectDate.controller.js";

const Projectsrouter = express.Router();

Projectsrouter.post("/", projectController.createProject);
Projectsrouter.get("/", projectController.getProjects);
Projectsrouter.post("/dates", projectDateController.createProjectDate);
Projectsrouter.get("/:projectID", projectController.getProjectById);
export default Projectsrouter;
