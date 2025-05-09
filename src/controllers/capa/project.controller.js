import projectService from "../../services/capa/project.service.js";
import { projectSchema } from "../../validations/projects.validations.js";
import projectDateService from "../../services/capa/projectDate.service.js";

class ProjectController {
  async createProject(req, res) {
    try {
      const validated = projectSchema.parse(req.body);
      const project = await projectService.createProject(validated);
      res.status(201).json(project);
    } catch (error) {
      if (error.errors) {
        return res
          .status(400)
          .json({ error: "Validation failed", details: error.errors });
      }
      res
        .status(500)
        .json({ error: "Failed to create project", details: error.message });
    }
  }

  async getProjects(req, res) {
    try {
      const projects = await projectService.getAllProjects();

      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  }
  async getProjectById(req, res) {

    const { projectID } = req.params;
    if (!projectID) {
      return res.status(400).json({ error: "Project ID is required" });
    }

    try {
      const project = await projectService.getProjectById(projectID);

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project data" });
    }
  }
}

export default new ProjectController();
