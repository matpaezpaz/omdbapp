import React from 'react';
import SearchResult from '../../component/SearchResult';
import OMDbAPIInstance from '../../services/OMDbAPIService';



class Search extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            results: [],
            error: ""
        }
    }

    handleSubmit = async (event) => {
        this.setState({
            error:""
        })
        event.preventDefault();event.stopPropagation();
        if ( this.state.searchText.length === 0 ) {
            return;
        }
        const { Response, Error : responseError, Search : results} = await OMDbAPIInstance.searchMovieTitle(this.state.searchText);
        if( Response === 'False' ) {
            this.setState({
                error : responseError
            });
        }
        this.setState({
            results : results
        });
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            searchText: event.target.value
        });
    }

    render() {
        let results = [];
        if ( this.state.results ) {
            results = this.state.results.map( (result) => (
                <div key={result.imdbID} className="column is-one-third-widescreen is-half-tablet">
                    <SearchResult  {...result} />
                </div>
            ) );
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Search Movie</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" value={this.state.searchText} onChange={this.handleChange} 
                                        name="searchText" type="text" placeholder="Search movie by name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="section mt-1">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="columns is-multiline">
                                {this.state.error.length > 0?`Error: ${this.state.error}`:results}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;