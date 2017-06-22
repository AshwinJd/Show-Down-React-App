var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var logger = log4js.getLogger();
// var jwt = require("jwt-simple");
var jwt    = require('jsonwebtoken');
var cfg = require("../config");
var User = require('../models/userModel');

router.post("/", function(req, res) {

        var username = req.body.user.username;
        var password = req.body.user.password;
        User.getUserByName(username, function(err,user){
          if(err) throw err;
          if(user)
            {
              User.checkPassword(password, user.password, (err, isMatch)=>{
                logger.info('passHash',user.password);
                logger.info('matchOUtput', isMatch);
                if(err) return err;
                if(isMatch){
                  logger.info('user found', user);
                  var token = jwt.sign(user, cfg.jwtSecret);
                   res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                    });
                }else {
                  res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                  logger.error('Wrong Password');
                }

              });
            }
        })


});




module.exports = router;
