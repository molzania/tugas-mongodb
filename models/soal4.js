const mongoose = require("mongoose");
 // ini schema one-to-one schema

const soal4 = new mongoose.Schema({
  cinemaName: {
    type: String,
    require: true,
  },
  films: {
      type:subSchema,
      default:{
    name: {
        type: String,
    }
  },
  location: {
      type: String,
      require: true,
  }
  }});

mongoose.model("soal3", soal4);
module.exports = soal4;