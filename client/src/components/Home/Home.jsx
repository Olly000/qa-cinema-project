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
                            <p id="homeTitle">Here's what's on at the moment</p>
                        </div>

                        <div className="img-container">
                            <img src={require('./img/projector.jpg')} alt="fim projector" />
                        </div>

                   
                    </div>
     <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Top_Gun:_Maverick">Top Gun Maverick</a></p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Bullet_Train_(film)">Bullet Train</a> </p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Orphan:_First_Kill">Orphan Second Kill</a> </p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/The_Invitation_(2022_film)">The invitation</a> </p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home">Spiderman No Way Home</a> </p>
                </div>
            </div>
        </div>
    );
}

export default Home;