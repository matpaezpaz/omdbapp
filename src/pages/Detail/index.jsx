import React from 'react';
import Navbar from "../../component/Navbar";
import MovieDetail from "../../container/MovieDetail";
import 'bulma';

const Detail = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="section">
                <MovieDetail {...props} />
            </div>
        </React.Fragment>
    );
}

export default Detail;