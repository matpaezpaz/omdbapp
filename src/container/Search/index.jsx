import React from 'react';
import SearchResult from '../../component/SearchResult';

class Search extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            results: ['asd','asd']
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.searchText.value);
    }

    render() {
        let results = [];
        if ( this.state.results ) {
            results = this.state.results.map( (result) => (
                <div className="column is-10 is-offset-1">
                    <SearchResult />
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
                                    <input className="input is-large" name="searchText" type="text" placeholder="Search movie by name"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="section mt-1">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            {results}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;