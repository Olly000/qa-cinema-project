import projector from './img/projector.jpg';
import styles from './Home.css';

const Home = () => {
    return (
        <div className="centeredContent homeBackground">
            <div className="container" align="center">
                <div className="columnGapContainer">
                    <h1>WELCOME TO QA CINEMA!</h1>
                    <div className="venueContainer">
                        <div className="description-container centeredContent">
                            <p id="homeTitle">Welcome and thank you for coming to QA Cinemas!</p>
                            <p id="homeTitle">Whether you're after the scares of a horror or the thrill of an action</p>
                            <p id="homeTitle">We have all you need right here! </p>
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

export default Home;