import PaymentDetails from "./PaymentDetails.jsx";
import PaymentInfo from "./PaymentInfo.jsx";
import CancelOrderButton from "./CancelOrderButton";


const Payment = (film, showing, adults, children, concessions, total) => {

    return (<>
            <h2> Make a payment</h2>
            <PaymentInfo film={film} showing={showing} adults={adults} children={children} concessions={concessions} total={total}/>
            <PaymentDetails total={total}/>
            <CancelOrderButton/>
        </>
    )
}

export default Payment;