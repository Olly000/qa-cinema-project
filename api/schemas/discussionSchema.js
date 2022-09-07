const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DiscussionSchema = new Schema({
        name: {
            type: String,
            value: "Anonymous"
        },
         postTitle: {
		type: String,
		max: 50,
                value: "A good movie"
	},
        filmTitle: {
            type: String
         },
        rating: {
		type: Number, 
		min: [1, "Number must be between 1-10"],
		max: [10, "Number must be between 1-10"],
                value: 0
	},
	comment: {
                type: String,
                max: 300,
                value: "It was a good movie"
        },

}
);

module.exports = DiscussionSchema;