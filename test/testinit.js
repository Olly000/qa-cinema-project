const {DiscussionSchema} = require("./API/schemas/discussionSchema.js");
const {MovieSchema} = require("./api/schemas/movieSchema.js")

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/qa-test").then(res=>{
    console.log("con to tdb");
}).catch(err => {
    console.log(err);
});

const DiscussionModel = mongoose.model("Discussions", DiscussionSchema);
const MovieModel = mongoose.model("Discussions", MovieSchema);

const newMovie1 = new MovieModel({

    title:"Three Thousand Years of Longing",
    actors: ["Idris Elba", " Tilda Swinton", " Aamito Lagum", " Nicolas Mouawad"],
    director: "George Miller",
    image: "img/three_thousand_years_of_longing.jpg"
        
});

//saves movie fill crete similar for all apis
async function saveMovies(){
    newMovie1.isNew = true;
    await newMovie1.save();
}    

const newDiscussion1 = new DiscussionModel({
    name: "Three Thousand Years Review",
    
})
// creates data fill in for all apis
const createData = async () => {
    //await clearCollections();
    await saveMovies();
}
//fill in for all apis
async function clearCollections(){

    await MovieModel.deleteMany({});
}

module.exports = {createData, clearCollections};