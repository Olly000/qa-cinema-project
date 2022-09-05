
import {
    Elements,
    CardElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const StripePayment = () => {
    const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

    const handleSubmit = (stripe, elements) => async () => {
        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // ... SEND to your API server to process payment intent
        }
    };

    const PaymentForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        return (
            <>
                <h4>stripe form</h4>
                <CardElement/>
                <button onClick={handleSubmit(stripe, elements)}>Submit Payment</button>
            </>
        );
    }

    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    );
}

export default StripePayment;