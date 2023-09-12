const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 4000;

const eventRoutes = require("./src/routes/eventRoutes");
app.get("/", (req, res, next) => {
  res.send("Server is up!");
});
app.use("/events", eventRoutes);

app.listen(PORT, () => {
  console.log("Server is Running on PORT", PORT);
});
