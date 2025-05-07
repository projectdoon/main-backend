import mongoose from "mongoose";

const ComplainsSchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Status: {
    type: Number,
    required: true,
  },
  Burst: {
    type: Number,
    required: true,
  },
  Lat: {
    type: Number,
    required: true,
  },
  Long: {
    type: Number,
    required: true,
  },
});

const Complain = mongoose.model("Complain", ComplainsSchema);
export default Complain;
