const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const pay = require('../../schemas/paySchema.js');

pay.transaction.find().then(res => console.log(res))

router.post('/receiveDetails', (req, res) => {

    pay.paymentDetails.findOne({"userName":{$eq:req.body.userName}}).then((result) => {
        console.log(result);
        if(!result) {
            const newUser = new pay.paymentDetails(req.body);
            newUser.save().then(() => {
                res.send(`payment details for ${req.body.cardName} have been saved`);
            });
        }
    })
})



router.post("/", (req, res) => {
    pay.transaction.create(req.body).then(() => {
        res.send(JSON.stringify());
    }).catch((err) => {
        throw err;
    })
})
router.get("/confirm", (req, res) => {
    pay.transaction.find({}).then((paymentSchema) => {
        res.send(JSON.stringify(paymentSchema));
    }).catch((err) => {
        throw err;
    })
})

module.exports = router;