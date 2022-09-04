import React from "react";
import nope from "../img/nope.jpg";

const Movie = ({title, actors, director, showingTimes, screen}) =>
    <div className="movie">
        <img src={require("../img/" + title.toLowerCase() +".jpg")} alt={title} />
        <div className="filmInfo">
            <h3>{title}</h3>
            <p><strong>Directed by:</strong>{director}</p>
            <p><strong>Starring:</strong>{actors}</p>
            <p><strong>Showing times:</strong>{showingTimes} daily in screen: {screen}</p>

        </div>

    </div>;


export default Movie;