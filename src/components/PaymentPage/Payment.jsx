import PaymentDetails from "./PaymentDetails.jsx";
import PaymentInfo from "./PaymentInfo.jsx";


const Payment = (film, showing, adults, children, concessions) => {

    return (<>
            <h2> Make a payment</h2>
            <PaymentInfo film={film} showing={showing} adults={adults} children={children} concessions={concessions}/>
            <PaymentDetails/>
        </>
    )
}

export default Payment;