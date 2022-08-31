import cinePic from './cinemaoutside.jpg';
import './GettingThere.css';
import Map from "./Map.jsx";

const GettingThere = () => {

    return(
        <>
            <img src={cinePic} id="cinePic" alt="QA Cinema"/>
            <div>
                <p> The address of the cinema is: International House, 1 St Katharine's Way, London E1W 1UN</p>
                <Map />
            </div>
        </>
    );
}
export default GettingThere;