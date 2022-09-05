import PaymentDetails from "./PaymentDetails.jsx";
import PaymentInfo from "./PaymentInfo.jsx";
import CancelOrderButton from "./CancelOrderButton";
import {useLocation} from "react-router-dom";

const Payment = () => {

    const location = useLocation();
    const data = location.state;

    return (<>
            <h2> Make a payment</h2>
            <PaymentInfo film={data.film} showing={data.showing} adults={data.adults} children={data.children} concession={data.children} total={data.total} />
            <PaymentDetails total={data.total}/>
            <CancelOrderButton ticketNumber={data.ticketNumber}/>
        </>
    )
}

export default Payment;