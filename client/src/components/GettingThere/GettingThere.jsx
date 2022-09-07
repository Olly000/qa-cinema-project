import cinePic from './img/cinemaoutside.jpg';
import uGround from './img/London-Underground.png';
import busStop from './img/Buses_roundel.png';
import parking from './img/parking-icon.png';

import './GettingThere.css';
import MapBuilder from "./MapBuilder";
import '../Places-To-Go/PlacesToGo.css';


const GettingThere = () => {

    return (
        <div className="centeredContent placesToGoBackground">
            <div className="container">
                <div className="columnGapContainer centeredContent">
                    <h2>How to get here</h2>
                    <div className="img-container">
                        <img src={cinePic} id="cinePic" alt="QA Cinema" />
                    </div>
                    <div className="description-container">
                        <p> The address of the cinema is: International House, 1 St Katharine's Way, London E1W 1UN</p>
                        <p> Find us on what3words with <a href="https://what3words.com/free.speaks.butter" target="_blank"
                            rel="noreferrer">free.speaks.butter</a></p>
                        <div><MapBuilder /></div>
                    </div>
                    <div className="description-container columnGapContainer centeredContent">
                        <figure className="transport-figure">
                                <img src={uGround} className="transport-icon" alt="London Underground logo" />
                            <figcaption> The nearest Underground stations are Tower Hill and Tower Gateway</figcaption>
                        </figure>
                        <figure className="transport-figure">
                            <img src={busStop} className="transport-icon" alt="London Buses logo" />
                            <figcaption> Buses number 100 and 15 stop nearby</figcaption>
                        </figure>
                        <figure className="transport-figure">
                            <img src={parking} className="transport-icon" alt="Car parking icon" />
                            <figcaption> There is car parking round the corner from the cinema at St. Katherine's Dock
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GettingThere;