const express = require("express");
const cors = require('cors');
const app = express();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());
app.use(cors({origin: ['https://checkout.stripe.com', 'localhost:3000/payment', 'http://localhost:4242/create-payment-intent']}));

const prices = {
    adult: 10,
    child: 6,
    concession: 7
}

const calculateOrderAmount = (items) => {

    return (items.adults * prices.adult) + (items.children * prices.child) + (items.concession * prices.concession)
};

// This is the API for the stripe system
app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    res.setHeader('Content-Type', 'application/json');
    let total = calculateOrderAmount(items);
    console.log(res.headers);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: `${total}`,
        currency: "gbp",
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
