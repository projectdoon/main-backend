// routes/srRoutes.js

const express = require("express");
const { addSRData, getSRData } = require("../../../controllers/staff/srController");

const router = express.Router();

router.post("/add", addSRData);

router.get("/get", getSRData);

module.exports = router;
