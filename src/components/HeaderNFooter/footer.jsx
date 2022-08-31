import "./footer.css";


function Footer() {
    return (
        <div className="footer--basic">
            <footer>
                <ul className="inline--list">
                    <li className="list-inline-item">About Us</li>
                    <li className="list-inline-item">Contact Page</li>
                    <li className="list-inline-item">Age Classification</li>
                </ul>
                <p className="copyright">MnM LTD © 2022</p>
            </footer>
        </div>
    );
}

export default Footer;