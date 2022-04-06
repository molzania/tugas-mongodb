const mongoose = require("mongoose");

//ini schema one-to-one
const soalSatu = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
});

mongoose.model("soalSatu", soalSatu);
module.exports = soalSatu;