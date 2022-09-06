import React, { useEffect, useState } from "react";
import Movie from './sub-components/Movie';
import styles from './ListingsGallery.css';
import ListingsNav from "./sub-components/ListingsNav";

const ListingsGallery = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [apiResponse, setApiResponse] = useState('Hello');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        fetch("http://localhost:9000/movies", { method: 'get' })
            .then(res => res.json())
            .then(res => setMovies(res))
            .catch(err => console.log(err));
    }

    return (
        <>
            <ListingsNav />
            <div className="centeredContent homeBackground">
                <div className="searchContainer">
                    <input id="search" type="text" placeholder="Search for films..."
                        onChange={(e) => { handleChange(e) }} value={searchTerm} />
                </div>
                <div className="container">
                    <h2>Listings Gallery</h2>
                    <div className='movie_container'>
                        {movies.map((movie) => {
                            if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return <Movie key={movie.title} title={movie.title} actors={movie.actors.toString()}
                                    director={movie.director} screen="1" />
                            }
                        })
                        }
                    </div>
                </div>
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