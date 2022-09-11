

const OpeningTimes = () => {
return (
    <div className="centeredContent homeBackground">
        <div className="container" align="center">
            <div className="columnGapContainer">
                <h2>OpeningTimes!</h2>
                <div className="venueContainer">
                    <div className="description-container centeredContent">
                        <p id="homeTitle">We are open 7 days a week </p>
                        <p id="homeTitle">Our opening times are as follows:</p>
                        <p id="homeTitle">Mon-Fri 9am-11pm </p>
                        <p id="homeTitle">Sat-Sun 11am-11pm </p>
                    </div>

                    <div className="img-container">
                        <img src={require('.././Home/img/projector.jpg')} alt="fim projector" />
                    </div>

               
                </div>
            </div>
        </div>
    </div>
);
}

export default OpeningTimes;