// import express from "express";
// import Complain from "../../models/complains/complains.mongo.js";
// import {
//   getAllComplaints,
//   getGarbageComplaints,
//   getWaterComplaints,
//   getDeadComplaints,
//   markComplaintAsSolved,
// } from "../../controllers/complains.controller.js";

// const ComplainsRouter = express.Router();

// ComplainsRouter.get("/", async (req, res) => {
//   try {
//     const complaints = await getAllComplaints();
//     res.status(200).json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching complaints", error });
//   }
// });

// ComplainsRouter.get("/water", async (req, res) => {
//   try {
//     const complaints = await getWaterComplaints();
//     res.status(200).json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching water complaints", error });
//   }
// });

// ComplainsRouter.get("/garbage", async (req, res) => {
//   try {
//     const complaints = await getGarbageComplaints();
//     res.status(200).json(complaints);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching garbage complaints", error });
//   }
// });

// ComplainsRouter.get("/dead", async (req, res) => {
//   try {
//     const complaints = await getDeadComplaints();
//     res.status(200).json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching dead complaints", error });
//   }
// });

// // Route to mark a complaint as solved
// ComplainsRouter.post("/mark-solved/:id", async (req, res) => {
//   try {
//     const updatedComplaint = await markComplaintAsSolved(req.params.id);
//     res.status(200).json(updatedComplaint);

//     // Automatically update the status after 3 days (259200000 milliseconds)
//     setTimeout(async () => {
//       await Complain.findByIdAndUpdate(req.params.id, { Status: 1 });
//     }, 259200000); // 3 days in milliseconds
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error marking complaint as solved", error });
//   }
// });

// export default ComplainsRouter;

import express from "express";
import complainController from "../../controllers/complains.controller.js";

const ComplainRouter = express.Router();

ComplainRouter.get("/water", complainController.getWaterComplaints);
ComplainRouter.get("/garbage", complainController.getGarbageComplaints);
ComplainRouter.get("/dead", complainController.getDeadComplaints);
ComplainRouter.get("/manholes", complainController.getManholesComplaints);
ComplainRouter.get(
  "/street-light",
  complainController.getStreetLightComplaints
);
ComplainRouter.get(
  "/stagnant-water",
  complainController.getStagnantWaterComplaints
);
ComplainRouter.get("/extra1", complainController.getExtra1Complaints);
ComplainRouter.get("/extra2", complainController.getExtra2Complaints);
ComplainRouter.get("/extra3", complainController.getExtra3Complaints);

ComplainRouter.get("/", complainController.getAllComplaints);

ComplainRouter.patch("/:id/solve", complainController.markComplaintAsSolved);

export default ComplainRouter;
