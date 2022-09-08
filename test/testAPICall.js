const connect = require("express");
const bodyParser = require('body-parser');
const app = connect();
const { default: mongoose } = require("mongoose");

global.dburl = "mongodb://localhost:27017/mm-qa-cinema-test";
const MoviesAPI = require("");
const PaymentsAPI = require("");
const DiscussionsAPI = require("");
app.use("/api", bodyParser.json(), MoviesAPI, BookingsAPI, PaymentsAPI, DiscussionsAPI);
const server = app.listen(8090, () =>{
    console.log("Connected");
});

module.exports = server;