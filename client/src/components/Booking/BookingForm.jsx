import FilmInput from "./FilmInput";
import {useState} from "react";

import './booking.css';
import {useNavigate} from 'react-router';
import ShowingInput from "./ShowingInput";

const BookingForm = () => {


    const [film, setFilm] = useState('');
    const [showing, setShowing] = useState('');
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [concession, setConcession] = useState(0);
    const [disableShowing, setDisableShowing] = useState(true);

    const navigate = useNavigate()

    // these just here until backend is made and RetrieveFilms can supply the film name array
    const tempFilmList = ['Nope', 'Toy Story', 'Batman', 'Dune'];
    const tempShowingList = ['Friday 10 September, 14.00', 'Friday 10 September, 17.00', 'Saturday 11 September, 15.00'];
    const tempTickets = 6;

    let ticketNumber = adults + children + concession;

    const prices = {
        adult: 10,
        child: 6,
        concession: 7
    }
    let total = (adults * prices.adult) + (children * prices.child) + (concession * prices.concession)
    const selectFilm = (input) => {
        setFilm(input);
        setDisableShowing(false);
    }

    const checkAvailable = () => {
        fetch("./api/checkSeats") // TODO: check the endpoint matches this
            .then(async response => {
                let content = await response.json();
                if (ticketNumber > content.ticketsLeft) { // TODO: replace this var with result of request
                    document.getElementById('buy-button').disabled = true;
                    return ("Sorry, insufficient tickets left for this showing");
                }
                document.getElementById('buy-button').disabled = false;
                return null
            })
            .catch(error => console.log(error));
    }

    const RetrieveFilms = () => {
        // TODO: retrieve the list of films that are currently showing from the db
        return [];
    }

    const RetrieveShowings = () => {
        // TODO: retrieve the list of showings for the selected film from the db
        return [];
    }

    const handleSubmit = () => {
        fetch(`/updateTicketsLeft/:${ticketNumber}`)  // TODO: pass state without this fucking up
            .then((response) => console.log(response.status));

        navigate('/payment', {state: {film: film, showing: showing, adults: adults,
                children: children, concession: concession, ticketNumber: ticketNumber}});
    }

    return (
        <>
            <fieldset className="booking-form">
                <legend> Tickets</legend>
                <label> Choose Film</label>
                <FilmInput data={['--select film--', ...tempFilmList]} name="film" disabled={false} onChange={input => selectFilm(input.target.value)} />

                <label> Choose Showing</label>
                <ShowingInput data={['--select showing--', ...tempShowingList]} name="showing" disabled={disableShowing} onChange={input => setShowing(input.target.value)} />

                <label htmlFor="ad-tix">Number of Adult Tickets: </label><input type="text" className="in-fields"
                                                                                name="ad-tix" size="2"
                                                                                placeholder="0"
                                                                                onChange={input => setAdults(Number(input.target.value))}/>
                <label htmlFor="ch-tix">Number of Child Tickets: </label><input type="text" className="in-fields"
                                                                                name="ch-tix" size="2"
                                                                                placeholder="0"
                                                                                onChange={input => setChildren(Number(input.target.value))}/>
                <label htmlFor="co-tix">Number of Concession Tickets: </label><input type="text" className="in-fields"
                                                                                     name="co-tix" size="2"
                                                                                     placeholder="0"
                                                                                     onChange={input => setConcession(Number(input.target.value))}/>
                <button onClick={handleSubmit} id="buy-button" className="in-fields"> Buy Tickets</button>
            </fieldset>
            <div>{checkAvailable()}</div>
            <div className="total">
                Total cost is: £{total}
            </div>
        </>
    )
}

export default BookingForm;