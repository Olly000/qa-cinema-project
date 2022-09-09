
import OpeningTimes from './OpeningTimes';
const OpeningTimes = () => {
return (
    <div className="centeredContent homeBackground">
        <div className="container" align="center">
            <div className="columnGapContainer">
                <h2>OpeningTimes!</h2>
                <div className="venueContainer">
                    <div className="description-container centeredContent">
                        <p id="homeTitle">Welcome and thank you for coming to QA Cinemas!</p>
                        <p id="homeTitle">WOut opening times are as follows:</p>
                        <p id="homeTitle">Mon-Fri 9am-11pm </p>
                        <p id="homeTitle">Sat-Sun 11am-11pm </p>
                    </div>

                    <div className="img-container">
                        <img src={require('./img/projector.jpg')} alt="fim projector" />
                    </div>

               
                </div>
            </div>
        </div>
    </div>
);
}

export default OpeningTimes;