import React, { useEffect, useState } from "react";
import Movie from './sub-components/Movie';
import styles from './ListingsGallery.css'


const ListingsGallery = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);
            setSearchTerm('');
        }
    }
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <>
            <h2>Listings Gallery</h2>
            <div className='movie_container'>

                 <Movie title="Nope" actors="Daniel Kaluuya, Keke Palmer, Steven Yeun, Michael Wincott" director="Jordan Peele" showingTimes="1pm-3pm" screen="1" />
                 <Movie title="Samaritan" actors="Sylvester Stallone, Javon Walton, Pilou Asbæk, Dascha Polanco" director="Julius Avery" showingTimes="3pm-5pm" screen="1" />
                 <Movie title="Three Thousand Years of Longing" actors="Idris Elba, Tilda Swinton, Aamito Lagum, Nicolas Mouawad" director="George Miller" showingTimes="1pm-3pm" screen="2" />
                 <Movie title="The Invitation" actors=" Nathalie Emmanuel, Thomas Doherty, Stephanie Corneliussen, Alana Boden" director="Jessica M. Thompson" showingTimes="1pm-3pm" screen="Deluxe" />
                 <Movie title="Nope" actors="Daniel Kaluuya, Keke Palmer, Steven Yeun, Michael Wincott" director="Jordan Peele" showingTimes="1pm-3pm" screen="1" />
                 <Movie title="Nope" actors="Daniel Kaluuya, Keke Palmer, Steven Yeun, Michael Wincott" director="Jordan Peele" showingTimes="1pm-3pm" screen="1" />
                 <Movie title="Nope" actors="Daniel Kaluuya, Keke Palmer, Steven Yeun, Michael Wincott" director="Jordan Peele" showingTimes="1pm-3pm" screen="1" />
                 <Movie title="Nope" actors="Daniel Kaluuya, Keke Palmer, Steven Yeun, Michael Wincott" director="Jordan Peele" showingTimes="1pm-3pm" screen="1" />


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