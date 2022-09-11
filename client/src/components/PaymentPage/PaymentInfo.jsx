const PaymentInfo = ({film, showing, adults, children, concession, total}) => {

    return (
        <div className="payment-container">
            <p className="pay-text"> You are about to buy {adults} adult ticket(s), {children} child ticket(s)
                and {concession} concession ticket(s) for the showing of {film} on {showing}</p>
            <br/>
            <p className="pay-text">Total Price is: £{total}</p>
        </div>
    )
}

export default PaymentInfo;