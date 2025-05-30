import express from "express";
import cors from "cors";
import AlertsRouter from "./routes/alerts/alerts.routes.js";
import ComplainsRouter from "./routes/complains/complains.routes.js";
import temp from "./generals/temperature/temperature.js";
import SchemeRouter from "./routes/schemes/SchemesRouter.js";

import appAlertRouter from "./routes/alerts/appAlerts.routes.js";
import appComplainRouter from "./routes/complains/appComplains.routes.js";
import authRouter from './routes/auth/auth.routes.js';
import Projectsrouter from "./routes/capa/capa.routes.js";
import appProjectsRouter from './routes/capa/appCapa.routes.js';
import UserRoutes from './routes/user/user.routes.js';
import appSchemesRouter from './routes/schemes/appSchemes.routes.js';

const app = express();


app.use(cors());
app.use(express.json());

//admin
app.use("/admin/alerts", AlertsRouter);
app.use("/admin/complains", ComplainsRouter);
app.use("/admin/scheme", SchemeRouter);
app.use("/admin/projects", Projectsrouter);

// user
app.use('/api/auth', authRouter);
app.use('/api/user', UserRoutes);
app.use("/api/complains", appComplainRouter);
app.use("/api/alerts", appAlertRouter);
app.use('/api/schemes', appSchemesRouter)
app.use('/api/projects', appProjectsRouter)

app.use("/", temp);


export default app;
