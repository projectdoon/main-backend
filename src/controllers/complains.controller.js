import Complain from "../models/complains/complains.mongo.js";
import {registerComplain, getComplainData} from '../services/complains/complains.services.js'

export const getWaterComplaints = async () => {
  try {
    const complaints = await Complain.find({ Category: "water" });
    return complaints;
  } catch (error) {
    console.error("Error fetching water complaints:", error);
    throw error;
  }
};

export const getGarbageComplaints = async () => {
  try {
    const complaints = await Complain.find({ Category: "garbage" });
    return complaints;
  } catch (error) {
    console.error("Error fetching garbage complaints:", error);
    throw error;
  }
};

export const getDeadComplaints = async () => {
  try {
    const complaints = await Complain.find({ Category: "dead" });
    return complaints;
  } catch (error) {
    console.error("Error fetching dead complaints:", error);
    throw error;
  }
};

export const getAllComplaints = async () => {
  try {
    const complaints = await Complain.find({});
    return complaints;
  } catch (error) {
    console.error("Error fetching all complaints:", error);
    throw error;
  }
};

// Function to mark a complaint as solved
export const markComplaintAsSolved = async (id) => {
  try {
    const updatedComplaint = await Complain.findByIdAndUpdate(
      id,
      { Burst: 1 },
      { new: true }
    );
    return updatedComplaint;
  } catch (error) {
    console.error("Error marking complaint as solved:", error);
    throw error;
  }
};

// app
export const registerUserComplain = async (req, res, next) => {
    try {
        const { userId, Category, Description, Imageurl, Status, Burst, Lat, Long } = req.body;

        const successRes = await registerComplain(
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
            return res.status(400).json({ status: false, message: 'User registration failed' });
        }

        res.json({ status: true, success: "complain registered successfully" });

    } catch (error) {
        res.status(500).json({ status: false, message: 'complain Internal server error', error: error.message });
    }
};

export const getUserComplain = async (req, res, next) => {
    try {
        const { id: userId } = req.user;
        const complains = await getComplainData(userId);

        if (!complains || complains.length === 0) {
            return res.status(400).json({ status: false, message: 'No complaints found for the user' });
        }

        console.log('Complaint list fetched successfully');

        res.json({ status: true, success: complains });

    } catch (error) {
        res.status(500).json({ status: false, message: 'Internal server error while fetching complaints', error: error.message });
    }
};