const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const emailRoutes = require("./routes/email");
const appoinmentRoutes = require("./routes/appointment");

const app = express();

mongoose
  .connect(
    "mongodb+srv://divyank:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0-chllg.mongodb.net/node_angular?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
// mongoose.set('useCreateIndex', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/appointment", [appoinmentRoutes]);
app.use("/api/posts", [postsRoutes]);
app.use("/api/email", [emailRoutes]);
app.use("/api/user", [userRoutes]);
app.use((req, res, next) => {
  res.sendFile("path.join()");
});

module.exports = app;
