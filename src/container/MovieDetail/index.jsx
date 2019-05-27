import React from 'react';
import OMDbAPIInstance from '../../services/OMDbAPIService';
import ErrorPage from '../../component/ErrorPage';
import Movie from '../../component/Movie';

class MovieDetail extends React.Component {
    constructor(){
        super();
        this.state = {
            movie: {},
            error: null
        }
    }

    async componentDidMount(){
        const {
            match: {
                params: {
                    imdbID
                }
            }
        } = this.props;
        const movie = await OMDbAPIInstance.getMovieByID(imdbID);
        this.setState({
            error : movie.Error?true:null ,
            movie : movie
        })
    }

    
    render () {
        if( this.state.error !== null ) {
            return (
                ErrorPage({title:'Error',text:this.state.error})
            )
        }
        return Movie(this.state.movie);
    }
}

export default MovieDetail;