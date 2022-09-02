const router = require("express").Router();
const mongoose = require("mongoose");
const {discussionSchema} = require("../Schemas/discussionSchema")
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/QA_Cinema', {
    userNewUrlParser: true,
    userUnifiedTopology:true
}).then(res=>{
    console.log("connected to Discussion Board Api");
}).catch(err => {
    console.log("not connected to Discussion Board API");
});

router.get("/discussion/getDiscussionPosts", async (req, res) => {
    const discussion = await discussionSchema.find((err, discussion) => {
        if (err) {
            console.log("Error occured: ", err);
            res.send(err.stack);
        } else {
           console.log("Discussion created");
            res.send(JSON.stringify(discussion))
        }
    })
});

