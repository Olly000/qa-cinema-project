import {useNavigate} from "react-router";

const CancelOrderButton = () => {

    const navigation = useNavigate();

    const handleClick = () => {
        fetch(`/updateTicketsLeft/:${-ticketNumber}`)  // TODO: pass state without this fucking up
            .then((response) => console.log(response.status));
        navigation(-1);
    }

    return(
        <button onClick={handleClick}>Cancel Order </button>
    )
}

export default CancelOrderButton;