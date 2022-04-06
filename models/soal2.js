const mongoose = require("mongoose");
// ini schema one to one
const soal1 = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
    max:2,
    require: true, 
  },
});

mongoose.model("soal1", soal1);
module.exports = soal1;