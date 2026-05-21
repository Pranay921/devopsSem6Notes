const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Docker Compose is working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});