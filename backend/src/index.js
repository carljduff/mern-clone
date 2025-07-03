import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/sequelize.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.use(express.json());
dotenv.config();
app.use(cookieParser());

const PORT = process.env.API_PORT;


app.use("/api/auth", authRoutes);
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected via Sequelize.");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Connection Error: ", error);
  }
});
