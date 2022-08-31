import "./header.css";

function Header() {
    return (
        <header className="header">
            <nav className="header--navbar">
                <ul className="Gallery--Listings">
                    <li><a href='#'>Current Releases</a></li>
                    <li><a href='#'>Future Releases</a></li>
                    <li><a href='#'>Movie search</a></li>
                </ul>
                <ul className="Opening--Times">
                    <li><a href='#'>Open Times</a></li>
                    <li><a href='#'>Screen Showings</a></li>
                    <li><a href='#'>Our Screens</a></li>
                </ul>
                <ul className="Location">
                    <li><a href='#'>Getting There</a></li>
                    <li><a href='#'>Places To Go</a></li>
                </ul>
                <div className="animation start-home"></div>
            </nav>
        </header>
    );
}

export default Header;