import express from 'express';
// const SchemeController =require("../../controllers/SchemesController");

// const SchemeRouter = express.Router();


// SchemeRouter.post('/', SchemeController.createScheme);
// SchemeRouter.get('/', SchemeController.getAllSchemes);

// module.exports = SchemeRouter;
// // routes/scheme.routes.js
// const express = require("express");
import schemeController from "../../controllers/SchemesController.js";

const SchemeRouter = express.Router();


SchemeRouter.post("/", schemeController.createScheme);
SchemeRouter.get("/", schemeController.getAllSchemes);

export default SchemeRouter;