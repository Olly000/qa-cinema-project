var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const movieSchema = require('../schemas/movieSchema.js');
const Movie = mongoose.model('movies', movieSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  const movies = [];
  Movie.find({}).then(resp => res.send(resp)).catch(err => console.log(err));
  });

module.exports = router;
