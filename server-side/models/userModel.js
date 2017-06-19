const mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: String,
  emailId: String,
  password: String
});

module.exports = mongoose.model("User",UserSchema);
