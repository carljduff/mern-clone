import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/sequelize.js";
const app = express();
dotenv.config();

// sequelize.authenticate().then(() => console.log("PostgreSQL connected via Sequelize.")).catch((error) => console.error("Connection Error: ", error));
try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected via Sequelize.");
} catch (error) {
    console.error("Connection Error: ", error);
}

const PORT = process.env.API_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
