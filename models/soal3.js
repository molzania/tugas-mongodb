const mongoose = require("mongoose");
// ini schema one-to-many
const soal3 = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  brandName: {
    type: String,
    require: true,
  },
  varian: {
      type:subSchema,
      default:{
    varianName: {
        type: String,
    },
    Color: {
        type: String,
    },
    Quantity: {
        type:Number,        
    },
    Price:{
        type:Number,
    }}
  }
});

mongoose.model("soal3", soal3);
module.exports = soal3;