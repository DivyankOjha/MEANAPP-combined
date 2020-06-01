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

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }, { limit: "50mb" }));
app.use("/pictures", express.static(path.join(__dirname, "pictures")));
//app.use("/", express.static(path.join(__dirname, "angular")));

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

app.use("/api/posts", [postsRoutes]);
app.use("/api/user", [userRoutes]);
app.use("/api/appointment", [appoinmentRoutes]);
app.use("/api/email", [emailRoutes]);
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "angular", "index.html"));
// });

module.exports = app;
