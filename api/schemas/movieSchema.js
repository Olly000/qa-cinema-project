const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 1
    },
    actors: [String],
    director: {type: String,
        required: true,},
    image: {type: String,
        required: true},
    showings: [{
        screen: String,
        time: Date
    }]
});

module.exports = MovieSchema;