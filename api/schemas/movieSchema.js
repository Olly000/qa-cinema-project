const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 1
    },
    actors: {type: [String],
        required: true},
    director: {type: String,
        required: true,},
    image: {type: String,
        required: true},
    releaseDate: {type: Date,
    required: true}
});

module.exports = MovieSchema;