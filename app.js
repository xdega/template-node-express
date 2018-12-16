const express = require("express");
const app = express();
const port = 8080;

// Routes
app.get("/", (req, res) => {
  res.send("Hello, web!");
});

// Server
app.listen(port, () => {
  console.log("Server Started...");
});
