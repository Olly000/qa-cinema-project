var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const discussionSchema = require("../../schemas/discussionSchema");
const Post = mongoose.model('DiscussionBoard', discussionSchema);


router.get('/', function(req, res, next) {

    const DiscussionBoard = [];
    Post.find({}).then(resp => res.send(resp)).catch(err => console.log(err));
    });

router.post('/', function(req, res, next) {
  
    Post.create({}).then(resp => res.send(resp)).catch(err => console.log(err));
    });
    

  
  module.exports = router;
