const express = require('express');
// const SchemeController =require("../../controllers/SchemesController");

// const SchemeRouter = express.Router();


// SchemeRouter.post('/', SchemeController.createScheme);
// SchemeRouter.get('/', SchemeController.getAllSchemes);

// module.exports = SchemeRouter;
// // routes/scheme.routes.js
// const express = require("express");
const schemeController = require("../../controllers/SchemesController");

const SchemeRouter = express.Router();


SchemeRouter.post("/", schemeController.createScheme);
SchemeRouter.get("/", schemeController.getAllSchemes);

module.exports = SchemeRouter;