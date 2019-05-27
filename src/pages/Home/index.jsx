import React from 'react';
import 'bulma';
import Navbar from "../../component/Navbar";
import Search from '../../container/Search';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="section">
                <Search></Search>
            </div>
        </React.Fragment>
    );
}

export default Home;