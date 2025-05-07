import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
// import body_parser from 'body-parser';
import AlertsRouter from "./routes/alerts/alerts.routes.js";
import ComplainsRouter from "./routes/complains/complains.routes.js";
import temp from "./generals/temperature/temperature.js";
import SchemeRouter from "./routes/schemes/SchemesRouter.js";
// import attendanceRoutes from "./routes/Staff/routes/attendanceRoutes.js";
// import totalGarbageRoutes from "./routes/Staff/routes/totalGarbageRoutes.js";
// import srRoutes from "./routes/Staff/routes/srRoutes.js";
// import maintenanceRoutes from "./routes/Staff/routes/maintenanceRoutes.js";
// import avRoutes from "./routes/Staff/routes/avRoutes.js";
import appAlertRoutes from "./routes/alerts/appAlerts.routes.js";
import appComplainRoutes from "./routes/complains/appComplains.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// app.use(body_parser.json());

app.use(cors());
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../../frontend/build")));

//admin
app.use("/admin/alerts", AlertsRouter);
app.use("/admin/complains", ComplainsRouter);
app.use("/admin/scheme", SchemeRouter);
// app.use("/admin/attendance", attendanceRoutes);
// app.use("/admin/totalgarbage", totalGarbageRoutes);
// app.use("/admin/staffreport", srRoutes);
// app.use("/admin/maintenance", maintenanceRoutes);
// app.use("/admin/allvehicle", avRoutes);

// user
app.use("/user/alerts", appAlertRoutes);
app.use("user/complains", appComplainRoutes);
app.use("/", temp);

// Catch all other requests and return the React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
// });

export default app;
