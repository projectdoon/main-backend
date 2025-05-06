import express  from "express";
import cors from "cors";
import path from "path";
const body_parser=require('body-parser');

const app = express();

import AlertsRouter from "./routes/alerts/alerts.routes.js";
const ComplainsRouter = require("./routes/complains/complains.routes.js");
const temp = require("./generals/temperature/temperature.js");
const SchemeRouter = require("./routes/schemes/SchemesRouter.js");
// const attendanceRoutes = require("./routes/Staff/routes/attendanceRoutes");
// const   totalGarbageRoutes = require("./routes/Staff/routes/totalGarbageRoutes");
// const srRoutes = require("./routes/Staff/routes/srRoutes");
// const maintenanceRoutes = require("./routes/Staff/routes/maintenanceRoutes");
// const avRoutes = require("./routes/Staff/routes/avRoutes");

app.use(cors());
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.use("/admin/alerts", AlertsRouter);
app.use("/admin/complains", ComplainsRouter);
app.use("/admin/scheme", SchemeRouter);
// app.use("/admin/attendance", attendanceRoutes);
// app.use("/admin/totalgarbage", totalGarbageRoutes);
// app.use("/admin/staffreport", srRoutes);
// app.use("/admin/maintenance", maintenanceRoutes);
// app.use("/admin/allvehicle", avRoutes);
app.use("/", temp);

// Catch all other requests and return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

export default app;
