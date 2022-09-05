//import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul className="footerList">
                    <Link to="/about" className="navLink">About Us</Link>
                    <Link to="/" className="navLink">Contact Page</Link>
                    <Link to="/classification" className="navLink">Age Classification</Link>
                </ul>
                <p className="copyright">MnM LTD © 2022</p>
            </footer>
        </div>
    );
}

export default Footer;