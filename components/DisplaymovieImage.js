import React, { useState, useEffect } from 'react';
import MoViePoster from './MoviePoster';
import SearchBox from './SearchBox';




const DisplaymovieImage = (props) => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchValue1, setSearchValue1] = useState('');
    const getMovieRequest = async (searchValue, searchValue1) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&y=${searchValue1}&apikey=6b0d8265`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };
    useEffect(() => {
        getMovieRequest(searchValue, searchValue1);
    }, [searchValue, searchValue1]);

    return (
        <div className="container-fluid">
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} searchValue1={searchValue1} setSearchValue1={setSearchValue1} />
            </div>
            <div className='row'>
                <MoViePoster movies={movies} />
            </div>
        </div>

    )
}

export default DisplaymovieImage;