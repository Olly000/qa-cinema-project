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
        let showList = [];

        res.send(shows.map(entry => showList.push(entry.showtime, entry.screen)));
    })
})

// router.get('/checkSeats', (req, res) => {
//     console.log(req.body);
// });



module.exports = router;
