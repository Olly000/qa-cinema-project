const express = require("express");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());

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

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
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