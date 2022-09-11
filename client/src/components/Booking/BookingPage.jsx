import LoginForm from "./LoginForm";
import {useState} from "react";
import BookingForm from "./BookingForm";
import { useParams } from "react-router";

// import './booking.css'

const BookingPage = () => {

    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    const title = useParams();

    return(
        <>
            <h1> Book your tickets here</h1>
            <BookingForm title={title}/>
        </>
    )
}

export default BookingPage;