import projectDateService from "../../services/capa/projectDate.service.js";
import  projectDateSchema  from "../../validations/projectDates.validations.js";

class ProjectDateController {
  async createProjectDate(req, res) {
    try {
      const validated = projectDateSchema.parse(req.body);
      const date = await projectDateService.createProjectDate(validated);
      res.status(201).json(date);
    } catch (error) {
      if (error.errors) {
        return res
          .status(400)
          .json({ error: "Validation failed", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create project date" });
    }
  }

  async getProjectDates(req, res) {
    try {
      const dates = await projectDateService.getAllProjectDates();
      res.status(200).json(dates);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project dates" });
    }
  }
  async getProjectDates(req, res) {
    const { projectID } = req.params;

    if (!projectID) {
      return res.status(400).json({ error: "Project ID is required" });
    }

    try {
      const dates = await projectDateService.getProjectDatesByProjectId(
        projectID
      );
      res.status(200).json(dates);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project dates" });
    }
  }
}

export default new ProjectDateController();
