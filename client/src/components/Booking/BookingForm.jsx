import FilmInput from "./FilmInput";
import {useState} from "react";

import './booking.css';
import {useNavigate} from 'react-router';
import ShowingInput from "./ShowingInput";
import {useEffect} from "react";

const BookingForm = () => {

    const [movies, setMovies] = useState([]);
    const [showingsForFilm, setShowingsForFilm] = useState([]);
    const [film, setFilm] = useState('testinitial');
    const [showing, setShowing] = useState('');
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [concession, setConcession] = useState(0);
    const [disableShowing, setDisableShowing] = useState(true);

    const navigate = useNavigate();

    const baseURL = `http://localhost:4494`;

    useEffect(() => {
        if(movies.length === 0) {
        retrieveFilms();
        }
        // if(film !== 'testinitial' && showingsForFilm !== []) {

    });

    useEffect(() => {
        retrieveShowings(film);
        setDisableShowing(false);
    }, [film]);


    // const tempTickets = 6;

    let ticketNumber = adults + children + concession;

    const prices = {
        adult: 10,
        child: 6,
        concession: 7
    }
    let total = (adults * prices.adult) + (children * prices.child) + (concession * prices.concession);


    const retrieveShowings = (input) => {
        fetch(`${baseURL}/movies/showings/${input}`, {method: 'get'})
            .then(r => r.json()
            .then(body => {
                setShowingsForFilm(body.map(entry => {return (`${entry.time} in the  ${entry.screen} screen`)}))}))
            .catch(err => console.log(err));
    }

    const selectFilm = (input) => {
        console.log(input);
        setFilm(input);
    }

    const checkAvailable = () => {
        fetch(`${baseURL}/movies/checkSeats`) // TODO: check the endpoint matches this
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

    const retrieveFilms = () => {
        fetch(`${baseURL}/movies/movieTitles`, {method: 'get'})
            .then(res => res.json())
            .then(res => setMovies(res))
            .catch(err => console.log(err));
    }


const handleSubmit = () => {
    // fetch(`${baseURL}/updateTicketsLeft/:${ticketNumber}`)
    //     .then((response) => console.log(response.status));

    navigate('/payment', {
        state: {
            film: film, showing: showing, adults: adults,
            children: children, concession: concession, total: total, ticketNumber: ticketNumber
        }
    });
}

return (
    <>
        <fieldset className="booking-form">
            <legend> Tickets</legend>
            <label> Choose Film</label>
            <FilmInput data={['--select film--', ...movies]} name="film" disabled={false}
                       onChange={input => selectFilm(input.target.value)}/>

            <label> Choose Showing</label>
            <ShowingInput data={['--select showing--', ...showingsForFilm]} name="showing" disabled={disableShowing}
                          onChange={input => setShowing(input.target.value)}/>
 
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
        {/*<div>{checkAvailable()}</div>*/}
        <div className="total">
            Total cost is: £{total}
        </div>
    </>
)
}

export default BookingForm;