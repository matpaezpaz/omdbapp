import React from 'react';
import 'bulma';
import Navbar from "../../component/Navbar";

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="section">
                <div className="container">
                    <div className="columns">
                        <div className="is-6 is-offset-3">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Text input" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;