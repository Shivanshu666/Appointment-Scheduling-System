const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Routes
const registerRoute = require("./App/routes/registerRoute");
const appoinmentRoute=require("./App/routes/appoinmentRoute");
const dashboardRoute=require("./App/routes/dashboardRoute");
const staffRoute=require("./App/routes/staffRoute")

// Middleware
app.use(cors());
app.use(express.json());
app.use("/registerUser", registerRoute);
app.use("/appoinmentUser",appoinmentRoute);
app.use("/dashboard",dashboardRoute);
app.use("/staffRoute",staffRoute)

// Root Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB and Start Server
mongoose
  .connect(process.env.DBCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Mongoose is connected");

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Mongoose connection failed:", err.message);
  });
