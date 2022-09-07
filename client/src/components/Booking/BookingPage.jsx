import LoginForm from "./LoginForm";
import {useState} from "react";
import BookingForm from "./BookingForm";

// import './booking.css'

const BookingPage = () => {

    const [isLoggedIn, SetIsLoggedIn] = useState(false);

    return(
        <>
            <h1> Book your tickets here</h1>
            <BookingForm/>
        </>
    )
}

export default BookingPage;