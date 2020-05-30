const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  appointmentDate: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("appointment", appointmentSchema);
