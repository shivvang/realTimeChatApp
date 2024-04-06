import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectionToMongoDb } from "./db/connectionToDb.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("shivang is jacked");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectionToMongoDb();
  console.log(`the server is up and running in the port ${PORT}`);
});
