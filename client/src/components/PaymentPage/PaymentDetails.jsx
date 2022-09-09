import './payments.css';
import {useState} from "react";


const PaymentDetails = () => {

    const [userName, setUserName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const baseURL = 'http://localhost:4494';

    //TODO: this method should card details when user submits with the save details button pressed but just 404s with any combination of url i can think of ????
    const savePaymentDetails = () => {
        fetch(`${baseURL}/receiveDetails`, {
            method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userName: `${userName}`,
            cardName: `${cardName}`,
            cardNum: `${cardNum}`,
            expiry: `${expiry}`
        })
        })
            .then(res => {
                document.getElementById('details').value = res.body;
            })
            .catch(err => console.log(err));
    }

    const confirmPayment = () => {
        //TODO: as stripe doesn't work this is meant to send to Leon's payment api then return the confirmation page
        // (added to the saveDetails api file but not refactored yet)


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isChecked) {
            savePaymentDetails();
        }
        confirmPayment();
        }


    const handleCheck = () => {
        setIsChecked(!isChecked);

    }

    return(
        <>

        <fieldset id="payment-fields" className="payment-container"><legend className="pay-text">
            Please enter your payment details below</legend>
            <br/>
            <input type ="text" placeholder="username" onChange={e => setUserName(e.target.value)} required/>
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
            <button onClick={handleSubmit}>Submit details</button>
            <br/>
        </fieldset>
            <div id="details"></div>
            </>
    )
}

export default PaymentDetails;