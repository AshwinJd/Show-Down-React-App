const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: String,
  emailId: String,
  password: String
});

var User = module.exports = mongoose.model("User",UserSchema);

module.exports.createUser = function(newUser,callback){
  bcrypt.genSalt(10, function(err,salt){
    bcrypt.hash(newUser.password,salt, function(err,hash){
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.getUserByName = function(username,callback){
  var query = {name: username};
  // console.log(query);
  User.findOne(query,callback);
}

module.exports.checkPassword = function(incomingPassword,hash,callback){
  bcrypt.compare(incomingPassword,hash,(err,isMatch)=>{
    if(err) return err;
    console.log('Model Match',isMatch)
    callback(null, isMatch);
  })
}
