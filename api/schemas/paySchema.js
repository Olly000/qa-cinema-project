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

const paymentDetails = mongoose.model("PaymentDetails", paySchema);

module.exports = paymentDetails;