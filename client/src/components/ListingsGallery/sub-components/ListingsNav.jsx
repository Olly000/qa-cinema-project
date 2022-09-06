import { NavLink } from "reactstrap";


const ListingsNav = () => {
    return(
        <nav>
            <NavLink to="/listings/">Currently Showing</NavLink>
            <NavLink to="/listings/">Upcoming Films</NavLink>
        </nav>
    );
}

export default ListingsNav;