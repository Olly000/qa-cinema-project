const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; 

// const MONGODB_URI = 

mongoose.connect('mongodb://localhost:27017/Brendon', {
    userNewUrlParser: true,
    userUnifiedTopology:true
});

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

const data = {
    title: 'hello',
    body:'Testing my db'
};

const newBlogPost = new BlogPost(data);

newBlogPost.save((error) => {
    if (error) {
        console.log('oops');
   } else { 
    console.log('success')
   }
});



app.use(morgan('tiny'));

app.get('/api', (req, res) => {
    const data = {
        username: 'Lucks',
        age: 22
    };
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'Lucksray',
        age: 2
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT} `));