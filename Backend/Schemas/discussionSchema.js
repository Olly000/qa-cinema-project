const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DiscussionSchema = new Schema({
    name: {
            type: String,
            required: true,
    },
    postTitle: {
		    type: String,
		    max: 50
	},
    filmTitle: {
            type: String,
            required: true,
    },
	rating: {
		    type: Number, 
		    min: [1, "Number must be between 1-10"],
		    max: [10, "Number must be between 1-10"],
            required: true,
	},
	comment: {
            type: String,
            max: 300,
            required: true,
    },

},
);

module.exports = mongoose.model("DiscussionBoard", DiscussionSchema);