import React, { useEffect, useState } from "react";
import Movie from './sub-components/Movie';
import styles from './ListingsGallery.css';
import ListingsNav from "./sub-components/ListingsNav";

const ListingsGallery = ({ upcoming, current }) => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [apiResponse, setApiResponse] = useState('Hello');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
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

    const rend = () => {
        if (upcoming == true) {
            console.log("if");
            return movies.map((movie) => {
                let substr = movie.releaseDate.substring(0, 10);
                let movieDate = new Date(substr);
                if (movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && movieDate > today) {
                    console.log("Upcoming");
                    return <Movie key={movie.title} title={movie.title} actors={movie.actors.toString()}
                        director={movie.director} screen="1" />
                }
            })
        } else if (current == true) {
            console.log("else if");
            return movies.map((movie) => {
                let substr = movie.releaseDate.substring(0, 10);
                let movieDate = new Date(substr);
                if (movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && movieDate < today) {
                    console.log("Current");
                    return <Movie key={movie.title} title={movie.title} actors={movie.actors.toString()}
                        director={movie.director} screen="1" />
                }
            })
        } else {
            console.log("else");
            return movies.map((movie) => {
                if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    console.log("Both");
                    return <Movie key={movie.title} title={movie.title} actors={movie.actors.toString()}
                        director={movie.director} screen="1" />
                    
                }
            })
        }

    }

    return (
        <>
            <div className="centeredContent homeBackground">
                <div className="searchContainer">
                    <input id="search" type="text" placeholder="Search for films..."
                        onChange={(e) => { handleChange(e) }} value={searchTerm} />
                </div>
                <div className="container">
                    <h2>Listings Gallery</h2>
                    <div className='movie_container'>
                        {rend()}
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