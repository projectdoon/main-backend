import express from "express";
import cors from "cors";
import AlertsRouter from "./routes/alerts/alerts.routes.js";
import ComplainsRouter from "./routes/complains/complains.routes.js";
import temp from "./generals/temperature/temperature.js";
import SchemeRouter from "./routes/schemes/SchemesRouter.js";
import appAlertRoutes from "./routes/alerts/appAlerts.routes.js";
import appComplainRoutes from "./routes/complains/appComplains.routes.js";
import userRoutes from './routes/user/user.routes.js'
import ipRoutes from './routes/ip/ip.routes.js';
import Projectsrouter from "./routes/capa/capa.routes.js";


const app = express();


app.use(cors());
app.use(express.json());

//admin
app.use("/admin/alerts", AlertsRouter);
app.use("/admin/complains", ComplainsRouter);
app.use("/admin/scheme", SchemeRouter);
app.use("/admin/projects", Projectsrouter);

// user
app.use('/auth', userRoutes);
app.use("/user/complains", appComplainRoutes);
app.use("/user/alerts", appAlertRoutes);
app.use('/', ipRoutes);

app.use("/", temp);


export default app;
