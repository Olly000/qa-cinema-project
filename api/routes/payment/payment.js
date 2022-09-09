const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cinema_db").then(() => {
    console.log("Payment Connected");
}).catch(console.log);

const paymentSchema = mongoose.schema({
    cardName: String,
    children: Number,
    adults: Number,
    concession: Number,
    film: String,
    showing: String
})

const paymentModel = new mongoose.model("payments", paymentSchema);

router.post("/payment", (req, res) => {
    paymentModel.create(req.body).then(() => {
        res.send(JSON.stringify());
    }).catch((err) => {
        throw err;
    })
})

router.get("/payment/confirm", (req, res) => {
    paymentModel.find({}).then((paymentSchema) => {
        res.send(JSON.stringify(paymentSchema));
    }).catch((err) => {
        throw err;
    })
})

// resolve.fallback: {"zlib":false} , {"querystring": false}, {"path": false}, {"stream": false}, {"crypto": false}, {"http":false}, {"url":false}, {"util":false}

module.exports = router;