const movieData = require('../Data/MovieData.json');

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const MovieSchema = require('../schemas/movieSchema.js');
const movieSchema = require('../schemas/movieSchema.js');
const Movie = mongoose.model('movies', movieSchema);

const samaritan = new Movie(movieData[0]);
const ttyol = new Movie(movieData[1]);
const theInvitation = new Movie(movieData[2]);
const nope = new Movie(movieData[3]);
const atwow = new Movie(movieData[4]);
const blackPanther = new Movie(movieData[5]);
const blackAdam = new Movie(movieData[6]);
const amsterdam = new Movie(movieData[7]);

Movie.find({}).then(res => {
  if (res.length == 0) {
    samaritan.save().then(res => console.log("Samaritan saved"));
    ttyol.save().then(res => console.log("Three Thousand Years Of Longing saved"));
    theInvitation.save().then(res => console.log("The Invitation saved"));
    nope.save().then(res => console.log("Nope saved"));
    atwow.save().then(res => console.log("Avatar saved"));
    blackPanther.save().then(res => console.log("Black Panther saved"));
    blackAdam.save().then(res => console.log("Black Adam saved"));
    amsterdam.save().then(res => console.log("Amsterdam saved"));
  } else {
    console.log(res.length)
  }
});



/* GET users listing. */
router.get('/', function (req, res, next) {

  const movies = [];
  Movie.find({}).then(resp => res.send(resp)).catch(err => console.log(err));
});

module.exports = router;
