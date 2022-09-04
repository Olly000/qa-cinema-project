import React, { useEffect, useState } from "react";
import Movie from './sub-components/Movie';
import styles from './ListingsGallery.css';

const ListingsGallery = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [apiResponse, setApiResponse] = useState('Hello');

 /*   useEffect(() => {
        fetch("http://localhost:9000/testAPI", { method: 'get' })
            .then(res => res.text())
            .then(res => setApiResponse(res))
            .catch(err => console.log("WAGUAN!" + err));
    });*/

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        fetch("http://localhost:9000/movies", { method: 'get'})
        .then(res => res.json())
        .then(res => setMovies(res))
        .catch(err => console.log(err));
    }

    return (
        <>
            <h2>Listings Gallery</h2>
            <div className='movie_container'>
                {console.log(movies)}

              {  movies.map((movie) => {
                return <Movie title={movie.title} actors={movie.actors.toString()} director={movie.director} showingTimes={movie.showings.toString()} screen="1" />
               })
               }

                


            </div>
        </>
    )

    /*
        return (<>
            <form onSubmit={handleOnSubmit}>
    
                <input type="text" placeholder='Search...' className='search' value={searchTerm} onChange={handleOnChange} />
            </form>
    
          
        </>
        );*/
}

export default ListingsGallery;