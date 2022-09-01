const PaymentInfo = () => {

    const temp = {
        adult: 2,
        child: 1,
        concession: 0,
        film: "Dune",
        showing: "15.00, Saturday 3rd September 2022"
    }

    return (
        <div className="payment-container">
            <p className="pay-text"> You are about to buy {temp.adult} adult ticket(s), {temp.child} child ticket(s)
                and {temp.concession} concession ticket(s)
                for the showing of {temp.film} on {temp.showing}</p>
        </div>
    )
}

export default PaymentInfo;