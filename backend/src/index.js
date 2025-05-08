import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import session from "express-session";

import corsOptions from "./config/corsOptions.js";
import sessionOptions from "./config/sessionOptions.js";
import logger from "./middleware/logger.js";
import healthRouter from "./routes/health.js";

const app = express();

app.use(logger);
app.use(cors(corsOptions));
app.use(session(sessionOptions));
app.use(express.json());

app.use("/ping", healthRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
