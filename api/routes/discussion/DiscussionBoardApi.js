var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const discussionSchema = require("../../schemas/discussionSchema");
const Post = mongoose.model('DiscussionBoard', discussionSchema);

// mongoose.connect("mongodb://localhost:27017/cinema_db/discussionboards").then(() => {
//     console.log("Discussion Board Connected")
// }).catch(console.log);


router.get('/', (req, res) => {

    const DiscussionBoard = [];
    Post.find({}).then(resp => res.send(resp))
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  
    Post.create(req.body).then(() => res.send(JSON.stringify()))
    .catch(err => console.log(err));
});
    
  
  module.exports = router;
