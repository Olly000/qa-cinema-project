import React, { useState, useEffect } from "react";
import nope from "../img/nope.jpg";
import { Link } from 'react-router-dom';


const Movie = ({ title, actors, director, screen, releaseDate }) => {
    const link = `/booking/${title}`;
    const today = new Date();

    const checkDate = () => {
        if (releaseDate < today) {
            return <button><Link to={link}>Book tickets</Link></button>
        }
    }
    return (
        <div className="movie">
            <img src={require("../img/" + title.toLowerCase() + ".jpg")} alt={title} />
            <div className="filmInfo">
                <h3>{title}</h3>
                <p><strong>Directed by:</strong>{director}</p>
                <p><strong>Starring:</strong>{actors}</p>
                <p><strong>Showing times:</strong> daily in screen: {screen}</p>
                {checkDate()}
            </div>

        </div>
    );

}


export default Movie;