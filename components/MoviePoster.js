import React from 'react';


const MoviePoster = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div>
                    <div className='main'>
                        <div className="row">
                            <div className="column">
                                <div className="content">
                                    <img src={movie.Poster} alt='movie'></img>
                                    <ul className="list-group mb-4">
                                        <li>Title:{movie.Title}</li>
                                        <li>Year:{movie.Year}</li>
                                        <li>imdb:{movie.imdbID}</li>
                                        <li>Posts:{movie.Poster}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))
            }
        </>
    )

}

export default MoviePoster;