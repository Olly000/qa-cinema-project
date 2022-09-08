const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paySchema = new Schema({
    userName: {type:String,
                unique: true},
    cardName: String,
    cardNum: {type:Number,
                unique: true},
    expiry: String
})

const paymentSchema = new Schema({
    cardName: String,
    children: Number,
    adults: Number,
    concession: Number,
    film: String,
    showing: String
})

const transaction = new mongoose.model("transactions", paymentSchema);

const paymentDetails = mongoose.model("PaymentDetails", paySchema);

module.exports = {transaction, paymentDetails};