const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const paymentDetails = require('../../schemas/paySchema.js');


router.post('sendDetails', (req, res) => {

})

router.get("/payment/confirm", (req, res) => {
    paymentModel.find({}).then((paymentSchema) => {
        res.send(JSON.stringify(paymentSchema));
    }).catch((err) => {
        throw err;
    })
})

module.exports router;