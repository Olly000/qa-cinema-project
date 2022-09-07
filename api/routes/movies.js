var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const movieSchema = require('../schemas/movieSchema.js');
const Movie = mongoose.model('movies', movieSchema);

const movieList = require('../../api/Data/MovieData.json')

const filmOne = new Movie({
    "title": "Samaritan",
    "actors": ["Sylvester Stallone", " Javon Walton", " Pilou Asbæk", " Dascha Polanco"],
    "director": "Julius Avery",
    "image": "img/samaritan.jpg"
});
const filmTwo = new Movie({
    "title":"Three Thousand Years of Longing",
        "actors": ["Idris Elba", " Tilda Swinton", " Aamito Lagum", " Nicolas Mouawad"],
        "director": "George Miller",
        "image": "img/three_thousand_years_of_longing.jpg"
});
const filmThree = new Movie({
    "title": "The invitation",
        "actors":  ["Nathalie Emmanuel", " Thomas Doherty", " Stephanie Corneliussen", " Alana Boden"],
        "director": "Jessica M. Thompson",
        "image": "img/the_invitation.jpg"
});
const filmFour = new Movie ({
    "title": "Nope",
        "actors": ["Daniel Kaluuya", "Keke Palmer", "Steven Yeun", "Michael Wincott"],
        "director": "Jordan Peele",
        "image": "img/nope.jpg"
});

const filmArray = [filmOne, filmTwo, filmThree, filmFour];

for(let entry in filmArray) {
    filmArray[entry].save().then(console.log(`film ${entry} saved`));
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  const movies = [];
  Movie.find({}).then(resp => res.send(resp)).catch(err => console.log(err));
  });

router.get('/movieTitles', (req, res) => {
  Movie.find().then((movies) => {
      let list = []
      movies.map(entry => list.push(entry.title));

      res.send(list);
      }
  )
});

router.get('/checkSeats', (req, res) => {

});

module.exports = router;
