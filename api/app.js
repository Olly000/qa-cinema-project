const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');

const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');
const testAPIRouter = require("./routes/testAPI");
const app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use("/testAPI", testAPIRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cinema_db', { useNewUrlParser: true }).then(() => {
  console.log("connection ready");
}, (err) => { console.log("THIS IS THE ERROR I AM PRINTING: " + err) });




const movieSchema = require('./schemas/movieSchema.js');
const Movie = mongoose.model('movies', movieSchema);


const samaritan = new Movie({
  title: 'Samaritan',
  actors: ["Sylvester Stallone", " Javon Walton", " Pilou Asbæk", " Dascha Polanco"],
  director: "Julius Avery",
  showings: [{ screen: "1", time: new Date() }, { screen: "duluxe", time: new Date() }],
  image: `img/samaritan.jpg`
});
//samaritan.save().then(() => console.log('Samaritan saved')).catch(err => console.log(err));

const ttyol = new Movie({
  title: 'Three Thousand Years of Longing',
  actors: ["Idris Elba", " Tilda Swinton", " Aamito Lagum", " Nicolas Mouawad"],
  director: "George Miller",
  showings: [{ screen: "1", time: new Date() }, { screen: "duluxe", time: new Date() }],
  image: `img/three thousand years of longing.jpg`
});
//ttyol.save().then(() => console.log('Three Thousand Years of Longing saved')).catch(err => console.log(err));

const theInvitation = new Movie({
  title: 'The Invitation',
  actors: ["Nathalie Emmanuel", " Thomas Doherty", " Stephanie Corneliussen", " Alana Boden"],
  director: "Jessica M. Thompson",
  showings: [{ screen: "1", time: new Date() }, { screen: "duluxe", time: new Date() }],
  image: `img/the invitation.jpg`
});
//theInvitation.save().then(() => console.log('The Invitation saved')).catch(err => console.log(err));

const nope = new Movie({
  title: 'Nope',
  actors: ["Daniel Kaluuya", "Keke Palmer", "Steven Yeun", "Michael Wincott"],
  director: "Jordan Peele",
  showings: [{ screen: "1", time: new Date() }, { screen: "duluxe", time: new Date() }],
  image: "img/nope.jpg"
}); 

//nope.save().then(() => console.log('nope saved')).catch(err => console.log(err));

module.exports = app;
