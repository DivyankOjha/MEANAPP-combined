const express = require("express");
const router = express.Router();
const appointment = require("../models/appointments");
const ObjectID = require("mongodb").ObjectID;

router.get("/", (req, res, next) => {
  const appointmentdata = appointment
    .find()
    .then((results) => res.json(results))
    .catch((error) => res.send(error));
});

router.post("/", (req, res, next) => {
  const appointmentdata = new appointment({
    appointmentDate: req.body.appointmentDate,
    name: req.body.name,
    email: req.body.email,
  });
  if (
    !appointmentdata.email &&
    !appointmentdata.appointmentDate &&
    !appointmentdata.name
  ) {
    return res
      .status(400)
      .json({ message: "Appointment date, name and email are required" });
  }
  if (!appointmentdata.email) {
    return res.status(400).json({ message: "Please enter Email" });
  } else if (!appointmentdata.appointmentDate) {
    return res.status(400).json({ message: "Please Select Appointment Date" });
  } else if (!appointmentdata.name) {
    return res.status(400).json({ message: "Please enter Name" });
  }
  appointmentdata
    .save()
    .then((result) => res.json(result))
    .catch((error) =>
      res.status(400).json({
        message: "No Appointments Available on that date",
      })
    );
  console.log(appointmentdata);
});

router.get("/:id", (req, res, next) => {
  appointment
    .findById(req.params.id)
    .then((appointmentdata) => {
      if (appointmentdata) {
        res.status(200).json(appointmentdata);
      } else {
        res.status(404).json({ message: "Appointment not found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching appoinments failed",
      });
    });
});

router.delete("/:id", (req, res, next) => {
  appointment.deleteOne({ _id: req.params.id }).then((result) => {
    res.status(200).json({ message: "Appointment Deleted!" });
    console.log(result);
  });
});

module.exports = router;
