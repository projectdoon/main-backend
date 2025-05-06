const express = require('express');
const SchemeController =require("../../controllers/SchemesController");

const SchemeRouter = express.Router();


SchemeRouter.post('/', SchemeController.createScheme);
SchemeRouter.get('/', SchemeController.getAllSchemes);

module.exports = SchemeRouter;