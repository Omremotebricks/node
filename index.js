import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/twitter", (req, res) => {
  res.send("Hello Twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>Add Login</h1>");
});
app.get("hello", (req, res) => {
  res.send("Jelloooo");
});
app.listen(port, () => {
  console.log(`Hello Server is running :- http://localhost:${port}`);
  console.log(port);
});
