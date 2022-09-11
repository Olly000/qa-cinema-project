const connect = require("express");
const bodyParser = require('body-parser');
const app = connect();
const { default: mongoose } = require("mongoose");

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

global.dburl = "mongodb://localhost:27017/qa-test";
const MoviesAPI = require("../routes/movies");
const PaymentsAPI = require("../routes/payment/saveDetails");
const DiscussionsAPI = require("../routes/discussion/DiscussionBoardApi");

// "/api" removed as first argument of line 12 as wasn't being accepted
app.use(bodyParser.json(), MoviesAPI, PaymentsAPI, DiscussionsAPI);
const server = app.listen(8090, () =>{
    console.log("Connected");
});

describe("test Api responses", function() {
    let app = null;

    this.beforeEach("Setup", function () {
        app = require("../app.js");
    });

    it("Home Page", function (
    ) {
        chai.request(app).get("/").end(function (error, response) {
            chai.expect(error).to.be.null;
            chai.expect(response).to.have.status(200);
            chai.expect(response.text).to.equal("WELCOME TO QA CINEMA!");
        });
    });

    it("Listings", function (
    ) {
        chai.request(app).get("/listings").end(function (error, response) {
            chai.expect(error).to.be.null;
            chai.expect(response).to.have.status(200);
            chai.expect(response.text).to.equal("Listings Gallery");
        });
    });


    this.afterEach("tear down", function(){

        mongoose.connection.close();
    })

})

module.exports = server;