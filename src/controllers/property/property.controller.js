import propertyService from "../../services/property/property.service.js";
import { propertySchema } from "../../validations/property.validations.js";

class PropertyController {
  async createProperty(req, res) {
    try {
      const validated = propertySchema.parse(req.body);
      const property = await propertyService.createProperty(validated);
      res.status(201).json(property);
    } catch (error) {
      if (error.errors) {
        return res
          .status(400)
          .json({ error: "Validation failed", details: error.errors });
      }
      res
        .status(500)
        .json({ error: "Failed to create property", details: error.message });
    }
  }

  async getAllProperties(req, res) {
    try {
      const properties = await propertyService.getAllProperties();
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch properties" });
    }
  }

  async getPropertyById(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Property ID is required" });

    try {
      const property = await propertyService.getPropertyById(Number(id));
      if (!property)
        return res.status(404).json({ error: "Property not found" });
      res.status(200).json(property);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch property" });
    }
  }
}

export default new PropertyController();
