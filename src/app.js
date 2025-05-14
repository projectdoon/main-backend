import express from "express";
import cors from "cors";
import AlertsRouter from "./routes/alerts/alerts.routes.js";
import ComplainsRouter from "./routes/complains/complains.routes.js";
import temp from "./generals/temperature/temperature.js";
import SchemeRouter from "./routes/schemes/SchemesRouter.js";
import appAlertRoutes from "./routes/alerts/appAlerts.routes.js";
import appComplainRoutes from "./routes/complains/appComplains.routes.js";
import authRoutes from './routes/auth/auth.routes.js'
import Projectsrouter from "./routes/capa/capa.routes.js";
import UserRoutes from './routes/user/user.routes.js'
import appSchemesRoutes from './routes/schemes/appSchemes.routes.js'
const app = express();


app.use(cors());
app.use(express.json());

//admin
app.use("/admin/alerts", AlertsRouter);
app.use("/admin/complains", ComplainsRouter);
app.use("/admin/scheme", SchemeRouter);
app.use("/admin/projects", Projectsrouter);

// user
app.use('/api/auth', authRoutes);
app.use('/api/user', UserRoutes);
app.use("/api/complains", appComplainRoutes);
app.use("/api/alerts", appAlertRoutes);
app.use('/api/schemes', appSchemesRoutes)

app.use("/", temp);


export default app;
