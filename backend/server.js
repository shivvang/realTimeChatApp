import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectionToMongoDb } from "./db/connectionToDb.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse incoming requests
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("shivang is jacked");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectionToMongoDb();
  console.log(`the server is up and running in the port ${PORT}`);
});
