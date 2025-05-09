// import Complain from "../models/complains/complains.mongo.js";
// import {registerComplain, getComplainData} from '../services/complains/complains.services.js'

// export const getWaterComplaints = async () => {
//   try {
//     const complaints = await Complain.find({ Category: "water" });
//     return complaints;
//   } catch (error) {
//     console.error("Error fetching water complaints:", error);
//     throw error;
//   }
// };

// export const getGarbageComplaints = async () => {
//   try {
//     const complaints = await Complain.find({ Category: "garbage" });
//     return complaints;
//   } catch (error) {
//     console.error("Error fetching garbage complaints:", error);
//     throw error;
//   }
// };

// export const getDeadComplaints = async () => {
//   try {
//     const complaints = await Complain.find({ Category: "dead" });
//     return complaints;
//   } catch (error) {
//     console.error("Error fetching dead complaints:", error);
//     throw error;
//   }
// };

// export const getAllComplaints = async () => {
//   try {
//     const complaints = await Complain.find({});
//     return complaints;
//   } catch (error) {
//     console.error("Error fetching all complaints:", error);
//     throw error;
//   }
// };

// // Function to mark a complaint as solved
// export const markComplaintAsSolved = async (id) => {
//   try {
//     const updatedComplaint = await Complain.findByIdAndUpdate(
//       id,
//       { Burst: 1 },
//       { new: true }
//     );
//     return updatedComplaint;
//   } catch (error) {
//     console.error("Error marking complaint as solved:", error);
//     throw error;
//   }
// };

// // app
// export const registerUserComplain = async (req, res, next) => {
//     try {
//         const { userId, Category, Description, Imageurl, Status, Burst, Lat, Long } = req.body;

//         const successRes = await registerComplain(
//             userId,
//             Category,
//             Description,
//             Imageurl,
//             parseInt(Status),
//             parseInt(Burst),
//             parseFloat(Lat),
//             parseFloat(Long)
//         );

//         if (!successRes) {
//             return res.status(400).json({ status: false, message: 'User registration failed' });
//         }

//         res.json({ status: true, success: "complain registered successfully" });

//     } catch (error) {
//         res.status(500).json({ status: false, message: 'complain Internal server error', error: error.message });
//     }
// };

// export const getUserComplain = async (req, res, next) => {
//     try {
//         const { id: userId } = req.user;
//         const complains = await getComplainData(userId);

//         if (!complains || complains.length === 0) {
//             return res.status(400).json({ status: false, message: 'No complaints found for the user' });
//         }

//         console.log('Complaint list fetched successfully');

//         res.json({ status: true, success: complains });

//     } catch (error) {
//         res.status(500).json({ status: false, message: 'Internal server error while fetching complaints', error: error.message });
//     }
// };
import complainService from "../services/complains/complains.service.js";

class ComplainController {
  async getWaterComplaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory("water");
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching water complaints:", error);
      res.status(500).json({ error: "Error fetching water complaints" });
    }
  }

  async getGarbageComplaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "garbage"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching garbage complaints:", error);
      res.status(500).json({ error: "Error fetching garbage complaints" });
    }
  }

  async getDeadComplaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory("dead");
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching dead complaints:", error);
      res.status(500).json({ error: "Error fetching dead complaints" });
    }
  }
  async getManholesComplaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "manholes"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching manholes complaints:", error);
      res.status(500).json({ error: "Error fetching manholes complaints" });
    }
  }
  async getStreetLightComplaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "street light"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching street light complaints:", error);
      res.status(500).json({ error: "Error fetching street light complaints" });
    }
  }
  async getStagnantWaterComplaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "StagnantWater"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching StagnantWater complaints:", error);
      res
        .status(500)
        .json({ error: "Error fetching StagnantWater complaints" });
    }
  }
  async getExtra1Complaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "Extra1"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching Extra1 complaints:", error);
      res.status(500).json({ error: "Error fetching Extra1 complaints" });
    }
  }
  async getExtra2Complaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "Extra2"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching Extra2 complaints:", error);
      res.status(500).json({ error: "Error fetching Extra2 complaints" });
    }
  }
  async getExtra3Complaints(req, res) {
    try {
      const complaints = await complainService.getComplaintsByCategory(
        "Extra3"
      );
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching Extra3 complaints:", error);
      res.status(500).json({ error: "Error fetching Extra3 complaints" });
    }
  }

  async getAllComplaints(req, res) {
    try {
      const complaints = await complainService.getAllComplaints();
      res.status(200).json(complaints);
    } catch (error) {
      console.error("Error fetching all complaints:", error);
      res.status(500).json({ error: "Error fetching all complaints" });
    }
  }

  async markComplaintAsSolved(req, res) {
    const { id } = req.params;
    try {
      const updatedComplaint = await complainService.markComplaintAsSolved(id);
      res.status(200).json(updatedComplaint);
    } catch (error) {
      console.error("Error marking complaint as solved:", error);
      res.status(500).json({ error: "Error updating complaint status" });
    }
  }
  // app
  async registerUserComplain(req, res, next) {
    try {
      const {
        userId,
        Category,
        Description,
        Imageurl,
        Status,
        Burst,
        Lat,
        Long,
      } = req.body;
      const successRes = await complainService.registerComplain(
        userId,
        Category,
        Description,
        Imageurl,
        parseInt(Status),
        parseInt(Burst),
        parseFloat(Lat),
        parseFloat(Long)
      );

      if (!successRes) {
        return res
          .status(400)
          .json({ status: false, message: "User registration failed" });
      }

      res.json({ status: true, success: "complain registered successfully" });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "complain Internal server error",
        error: error.message,
      });
    }
  }

  async getUserComplain(req, res, next) {
    try {
      const { id: userId } = req.user;
      const complains = await complainService.getComplainData(userId);

      if (!complains || complains.length === 0) {
        return res
          .status(400)
          .json({ status: false, message: "No complaints found for the user" });
      }

      console.log("Complaint list fetched successfully");

      res.json({ status: true, success: complains });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Internal server error while fetching complaints",
        error: error.message,
      });
    }
  }
}

export default new ComplainController();
