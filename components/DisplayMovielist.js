import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import MovieImage from './MovieImage';
import Pagination from './Pagination';


const DisplayMovielist = (props) => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchValue1, setSearchValue1] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);
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

    const indexOfLastPost = currentPage * postPerPage;
    const indecOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = movies.slice(indecOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="cotainer-fluid">
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} searchValue1={searchValue1} setSearchValue1={setSearchValue1} />
            </div>
            <div className='row'>
                <MovieImage movies={currentPosts}
                />
                <Pagination postsPerPage={postPerPage} totalPosts={movies.length} paginate={paginate} />
            </div>


        </div>

    )
}

export default DisplayMovielist;