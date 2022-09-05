const PaymentInfo = ({film, showing, adults, children, concession, total}) => {

    // this is just a temporary variable to test the code of this section before booking page completed
    const temp = {
        adult: 2,
        child: 1,
        concession: 0,
        cost: 24,
        film: "Dune",
        showing: "15.00, Saturday 3rd September 2022"
    }

    return (
        <div className="payment-container">
            <p className="pay-text"> You are about to buy {adults} adult ticket(s), {children} child ticket(s)
                and {concession} concession ticket(s)
                for the showing of {film} on {showing}</p>
            <br/>
            <p className="pay-text">Total Price is: £{total}</p>
        </div>
    )
}

export default PaymentInfo;