//import "./header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="banner">
                <h1>QA CINEMA</h1>
                <div className="searchContainer">
                    <input id="search" type="text" placeholder="Search for films..."></input>
                </div>
            </div>
            <nav className="header--navbar">
                <ul className="navbar-nav">
                    <li><NavLink to='/' className="navLink">Home</NavLink></li>
                    <li><NavLink to='/listings' className="navLink">Listings</NavLink></li>
                    <li><NavLink to='/gdf' className="navLink">Open Times</NavLink></li>
                    <li><NavLink to='/dgfd' className="navLink">Screen Showings</NavLink></li>
                    <li><NavLink to='/screens' className="navLink">Our Screens</NavLink></li>
                    <li><NavLink to='/fgdf' className="navLink">Getting There</NavLink></li>
                    <li><NavLink to='/placesToGo' className="navLink">Places To Go</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;