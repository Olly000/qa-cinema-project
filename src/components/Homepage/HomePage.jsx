import { Container } from "reactstrap";
const HomePage = () => {
    document.title = "Home"

    return (
        <> 
        <h1> QA Cinemas</h1>
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
                        <p id="homeTitle"><a href="">Link to a movie within our listings gallery</a></p>
                        <p id="homeTitle"><a href="">Link to a movie within our listings gallery</a> </p>
                        <p id="homeTitle"><a href="">Link to a movie within our listings gallery</a> </p>
                        <p id="homeTitle"><a href="">Link to a movie within our listings gallery</a> </p>
                    </Container>
                </div>
                <br />
            </div>
        </Container>#
        </>
    );
}

export default HomePage;