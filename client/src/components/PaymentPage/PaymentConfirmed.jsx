import './paymentConfirm.css'
import {useLocation} from "react-router-dom";

const PaymentConfirm = () => {

    const location = useLocation();
    const {cardName, children, adults, concession, film, showing} = location.state;

    return (
        <>
            <header className="confirm--header">
                <h2>Details Cofirmed</h2>
            </header>

            <div>
                <h5>Your receipt is below</h5>
                <p>The tickets are under the name: {cardName}</p>
                <p>You have {children}  child tickets, {adults} adult tickets, and {concession} concession tickets</p>
                <p>For the movie: {film} </p>
                <p>Showing at : {showing}</p> <br/>
                <p>You can pick up your tickets at the reception till</p>
            </div>

            <footer>
                <p className="confirm--footer">Enjoy your movie</p>
            </footer>
        </>
    )
}

export default PaymentConfirm;