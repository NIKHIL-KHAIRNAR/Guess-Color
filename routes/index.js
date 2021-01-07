var express = require('express');
var router = express.Router();
var  MongoClient = require('mongodb').MongoClient
var assert = require('assert')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Color Guessing Game' });
});
router.get('/game/:id', function(req, res, next){
  res.render('game',{output: req.params.id});
});
router.post('/game/guessColor', function(req,res, next){
  var id = req.body.id;
  
  res.redirect('/game/' + id);
});

module.exports = router;
