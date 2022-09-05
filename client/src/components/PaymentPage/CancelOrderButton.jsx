import {useNavigate} from "react-router";

const CancelOrderButton = (ticketNumber) => {

    const navigation = useNavigate();

    const handleClick = () => {
        fetch(`/updateTicketsLeft/:${-ticketNumber}`)
            .then((response) => console.log(response.status));
        navigation(-1);
    }

    return(
        <button onClick={handleClick}>Cancel Order </button>
    )
}

export default CancelOrderButton;