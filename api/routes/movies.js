const movieData = require('../Data/MovieData.json');
const showingData = require('../Data/ShowingData.json');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const movieSchema = require('../schemas/movieSchema.js');
const Movie = mongoose.model('movies', movieSchema);
const showing = require('../schemas/showingSchema.js');



const samaritan = new Movie(movieData[0]);
const ttyol = new Movie(movieData[1]);
const theInvitation = new Movie(movieData[2]);
const nope = new Movie(movieData[3]);
const atwow = new Movie(movieData[4]);
const blackPanther = new Movie(movieData[5]);
const blackAdam = new Movie(movieData[6]);
const amsterdam = new Movie(movieData[7]);

Movie.find({}).then(res => {
  if (res.length === 0) {
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

const showing0 = new showing(showingData[0]);
const showing1 = new showing(showingData[1]);
const showing2 = new showing(showingData[2]);
const showing3 = new showing(showingData[3]);
const showing4 = new showing(showingData[4]);
const showing5 = new showing(showingData[5]);
const showing6 = new showing (showingData[6]);
const showing7 = new showing (showingData[7]);
const showing8 = new showing(showingData[8]);
const showing9 = new showing(showingData[9]);
const showing10 = new showing(showingData[10]);
const showing11= new showing(showingData[11]);
const showing12 = new showing(showingData[12]);
const showing13 = new showing(showingData[13]);
const showing14 = new showing (showingData[14]);
const showing15 = new showing (showingData[15]);

showing.find({}).then(res => {
if (res.length === 0) {
    showing0.save().then(res => console.log("0 saved"));
    showing1.save().then(res => console.log("1 saved"));
    showing2.save().then(res => console.log("2 saved"));
    showing3.save().then(res => console.log("3 saved"));
    showing4.save().then(res => console.log("4 saved"));
    showing5.save().then(res => console.log("5 saved"));
    showing6.save().then(res => console.log("6 saved"));
    showing7.save().then(res => console.log("7 saved"));
    showing8.save().then(res => console.log("8 saved"));
    showing9.save().then(res => console.log("9 saved"));
    showing10.save().then(res => console.log("10 saved"));
    showing11.save().then(res => console.log("11 saved"));
    showing12.save().then(res => console.log("12 saved"));
    showing13.save().then(res => console.log("13 saved"));
    showing14.save().then(res => console.log("14 saved"));
    showing15.save().then(res => console.log("15 saved"));
} else {
    console.log(res.length)
}
});


/* GET users listing. */
router.get('/', function (req, res, next) {

  const movies = [];
  Movie.find({}).then(resp => res.send(resp)).catch(err => console.log(err));
});

router.get('/movieTitles', (req, res) => {
  Movie.find().then((movies) => {
      let list = [];
      movies.map(entry => list.push(entry.title));

      res.send(list);
      }
  )
});

router.get('/showings/:film', (req, res) => {
    showing.find({filmTitle: {$eq: req.params.film}}).then((shows) => {
        res.send(shows.map(entry => {return ({time: entry.showtime, screen: entry.screen})}));
    })
})


module.exports = router;
