var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/userModel');



/* GET users listing. */
router.post('/', function(req, res, next) {
  //
  var item = {
    name: req.body.user.name,
    emailId: req.body.user.emailId,
    password: req.body.user.password
  }
  // console.log(req.body);
  const user = new User(item);
  user.save();
  res.send('respond with a resource');
});

module.exports = router;
