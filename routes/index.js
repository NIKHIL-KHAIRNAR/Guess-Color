// express 
var express = require('express');
// router to router through pages
var router = express.Router();
//loading models
const indextask = require('../models/indextask');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Color Guessing Game' });
});
router.get('/game/:id', function(req, res, next){
  res.render('game',{output: req.params.id});
});
router.post('/game/guessColor', function(req,res, next){
  var id = req.body.id;
  var Name = {Name:id};
  console.log(Name)

  indextask.create(Name);

  
  res.redirect('/game/' + id);
});

module.exports = router;
