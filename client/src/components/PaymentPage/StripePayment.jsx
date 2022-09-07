import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./payments.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
console.log(process.env.STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

const baseURL = 'http://localhost:4494/';

export default function StripePayment({adults, children, concession}) {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${baseURL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ adults: {adults}, children: {children}, concession: {concession}}] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="stripe-payment">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
