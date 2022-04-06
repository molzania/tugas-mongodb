const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  telephone: {
    type: Number,
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
