import './payments.css';
import {useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const PaymentDetails = (children,adults,concession,film,showing) => {

    let body = {
        "children": children,
        "adults": adults,
        "concession": concession,
        "film": film,
        "showing": showing
    }

    const [cardNum, setCardNum] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    //const expPattern = /\d\d\/\d\d/

    const handleSubmit = (event) => {
        console.log(event);
        if(!isChecked) {
            event.preventDefault();
        } else {
            //TODO: send user info to the db

            body += {"cardName": cardName};
            axios.post('http://locahost:27017/payment', {
                body}).then(res => res.json()).then(data => console.log(data));
        }
        //TODO: send state info to an external payment processor

        let cardData = {
            'cardNumber': cardNum,
            'accountHolderName': cardName,
            'cardExpiryData': expiry,
            'CVC': cvc
        }
    }

    const handleCheck = () => {
        setIsChecked(!isChecked);
        

    }

    return(
        <fieldset id="payment-fields" className="payment-container"><legend className="pay-text">
            Please enter your payment details below</legend>
            <br/>
            <input type="text" placeholder="cardholder name" onChange={e =>setCardName(e.target.value)} required/>
            <br/>
            <input type="text" placeholder="card number" onChange={e =>setCardNum(e.target.value)} minLength={16} maxLength={16}  required/>
            <br/>
            <input type="text" placeholder="expiry date" onChange={e =>setExpiry(e.target.value)} pattern="/\d\d\/\d\d/"  required/>
            <br/>
            <input type="password" placeholder="CVC" onChange={e =>setCvc(e.target.value)} minLength={3} maxLength={3} required/>
            <br/>
            <span className="pay-text"><input type="checkbox" onChange={handleCheck}/>
            Click here to save your details for next time</span>
            <br/>
            <button onClick={handleSubmit}><Link to="/payment/confirm">Submit details</Link></button>
            <br/>
        </fieldset>
    )
}

export default PaymentDetails;