import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const SearchResult = ({ Title, Year, imdbID, Type, Poster}) => {
    return (
        <div className="card movie-card">
            <div className="card-image">
                <figure className="image is-4by3 movie-card__figure">
                    <img src={Poster} alt={ `${Title} poster` } className="movie-card__figure__image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <Link to={`/movie/${imdbID}`}>
                        <h1>
                            {Title} <small> - {Year}</small>
                        </h1>
                    </Link>
                    <a href={`https://www.imdb.com/title/${imdbID}/`}>{Title} on IMDb</a>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;