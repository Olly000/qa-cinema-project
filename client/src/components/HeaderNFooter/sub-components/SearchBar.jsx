const SearchBar = (handleChange, searchTerm, setSearchTerm) => {
    return (
        <div className="searchContainer">
            <input id="search" type="text" placeholder="Search for films..." 
            onChange={(e) => {handleChange(e)}} value={searchTerm} />
        </div>
    );
}

export default SearchBar;