import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/sequelize.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(express.json());
dotenv.config();



const PORT = process.env.API_PORT;
// app.post("/users", (req, res) => {

// })
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected via Sequelize.");
} catch (error) {
    console.error("Connection Error: ", error);
}

});
