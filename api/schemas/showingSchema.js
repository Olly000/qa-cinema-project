const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showingSchema = new Schema({
    filmTitle: String,
    showtime: Date,
    screen: String,
    ticketsAvailable: Number,
})

const showing = mongoose.model("Showing", showingSchema);

module.exports = showing;