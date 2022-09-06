import { NavLink } from "reactstrap";


const ListingsNav = () => {
    return(
        <nav>
            <NavLink>Currently Showing</NavLink>
            <NavLink>Upcoming Films</NavLink>
        </nav>
    );
}

export default ListingsNav;