const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
  useremail: { type: String, required: true },
  remail: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Email", emailSchema);
