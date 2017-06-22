const express = require('express');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();
const auth = require('../auth')();
const users = require('../models/userModel');
const data = require('../data.json');
const temp = [...data];



router.get('/search/:name', function(req, res, next) {
  var name = (req.params.name).trim();
  name = name.toLowerCase();
  var reg = new RegExp(name);
  //console.log(name);
  var set = [];
  var list = data.map(function(item){
    let temp;
    temp = item.movie_name.trim();
    console.log(item);
    if((reg.test(temp.toLowerCase()))==true){
      set.push(item);
    }
    return set;

  })

  res.send(set);
});

router.get('/filter/:genre', function(req, res, next) {
  var genreSet = req.params.genre.split(',');
  // console.log(genreSet);
  var set = [];
  var d=0;
  var temp2 = [];
  var final = genreSet.map(function(item){
      temp2 = [];
    // console.log(item);
    var x =temp.map(function(e){
        var c =0;
        // console.log(e);
        e.movie_genre.map(function(ele){
          // console.log(ele);
          if(ele.toLowerCase().trim() == item.toLowerCase().trim())
            c=1;
        })
        if(c==1)
        {
          temp2.push(e);
          // console.log(e);
        }
    });
    // console.log(d++);
    temp = [...temp2];
  });
  console.log(temp);
  res.send(temp);
});


router.get('/',auth.authenticate(),(req,res)=>{
  res.json(users[req.user.id]);
});


module.exports = router;
