import "./header.css";
import { NavLink } from 'react-router-dom';
import SearchBar from './sub-components/SearchBar';

function Header() {
    return (
        <header className="header">
            <div className="banner">
                <h1>QA CINEMA</h1>
              <SearchBar />
            </div>
            <nav className="header--navbar">
                    <li><NavLink to='/' className="navLink">Home</NavLink></li>
                    <li><NavLink to='/listings' className="navLink">Listings</NavLink></li>
                    <li><NavLink to='/openingTimes' className="navLink">Open Times</NavLink></li>
                    <li><NavLink to='/screens' className="navLink">Our Screens</NavLink></li>
                    <li><NavLink to='/gettingThere' className="navLink">Getting There</NavLink></li>
                    <li><NavLink to='/placesToGo' className="navLink">Places To Go</NavLink></li>
                    <li><NavLink to='/discussion' className="navLink">Discussion Board</NavLink></li>
            </nav>
        </header>
    );
}

export default Header;