import './paymentConfirm.css'

const PaymentConfirm = ({cardName, children, adults, concession, film, showing}) => {

    return (
        <>
            <head className="confirm--header">
                <h2>Details Cofirmed</h2>
            </head>

            <body>
                <h5>Your receipt is below</h5>
                <p>The tickets are under the name: {cardName}</p>
                <p>You have {children}  child tickets, {adults} adult tickets, and {concession} concession tickets</p>
                <p>For the movie: {film} </p>
                <p>Showing at : {showing}</p> <br/>
                <p>You can pick up your tickets at the reception till</p>
            </body>

            <footer>
                <p className="confirm--footer">Enjoy your movie</p>
            </footer>
        </>
    )
}

export default PaymentConfirm;