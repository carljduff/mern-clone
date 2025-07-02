import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/sequelize.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(express.json());
dotenv.config();

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
