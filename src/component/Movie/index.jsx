import React from 'react'; 
import MovieDatum from './MovieDatum';

const Movie = (props) => {
    const {
        Title,
        Poster,
        Plot,
        Ratings,
        Director,
        Actors,
        Country,
        Year
    } = props;
    return (
        <div className="">
            <h1 className="title">{Title}</h1>
            <hr />
            <div className="columns">
                <div className="column is-3-widescreen is-4-tablet">
                    <figure className="image is-3by4">
                        <img src={Poster} alt={` ${Title} movie poster `}/>
                    </figure>
                    {Ratings ? Ratings.map((rating,index) => MovieDatum({title:rating.Source,value:rating.Value,className:'has-text-centered'}) ):'' }
                </div>
                <div className="column">

                    <p>
                        {Plot}
                    </p>
                    {MovieDatum({title:'Year',value:Year})}
                    {MovieDatum({title:'Director',value:Director})}
                    {MovieDatum({title:'Actors',value:Actors})}
                    {MovieDatum({title:'Country',value:Country})}
                </div>
            </div>
        </div>
    )
}

export default Movie;