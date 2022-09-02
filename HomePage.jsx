import { Container } from "reactstrap";
const HomePage = () => {
    document.title = "Home"

    return (
        <Container>
            <div>
                <div id="dropped-box" className="container-fluid" align="center">
                    <Container>
                        <br />
                        <p id="homeTitle">Welcome and thank you for coming to QA Cinemas!</p>
                        <br />
                        <p id="homeTitle">Whether you're after the scares of a horror or the thrill of an action</p>
                        <br />
                        <p id="homeTitle">We have all you need right here! </p>
                        <br />
                        <p id="homeTitle">Here's what's on at the moment</p> 
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Top_Gun:_Maverick">Top Gun Maverick</a></p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Bullet_Train_(film)">Bullet Train</a> </p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Orphan:_First_Kill">Orphan Second Kill</a> </p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/The_Invitation_(2022_film)">The invitation</a> </p>
                        <p id="homeTitle"><a href="https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home">Spiderman No Way Home</a> </p>
                    </Container>
                </div>
                <br />
            </div>
        </Container>
    );
}

export default HomePage;