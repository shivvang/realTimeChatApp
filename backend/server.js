import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("shivang is jacked");
});

app.listen(PORT, () => {
  console.log(`the server is up and running in the port ${PORT}`);
});
