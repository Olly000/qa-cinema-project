var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const discussionSchema = require("../Schemas/discussionSchema");
const discussion = mongoose.model('DiscussionBoard', discussionSchema);


router.get('/', function(req, res, next) {
  
    const DiscussionBoard = [];
    discussion.find({}).then(resp => res.send(resp)).catch(err => console.log(err));
    });

router.post('/', function(req, res, next) {
  
    discussion.create({}).then(resp => res.send(resp)).catch(err => console.log(err));
    });
    

  
  module.exports = router;
