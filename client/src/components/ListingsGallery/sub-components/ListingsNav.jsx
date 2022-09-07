import { Outlet } from "react-router-dom";
import {NavLink } from "react-router-dom";


const ListingsNav = () => {
    return (
        <>
            <nav>
                <NavLink className="navLink" to="/listings/current">Currently Showing</NavLink>
                <NavLink className="navLink" to="/listings/upcoming">Upcoming Films</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default ListingsNav;