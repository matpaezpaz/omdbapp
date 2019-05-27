import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from "./pages/Detail";
import ErrorPage from './component/ErrorPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:imdbID" component={Detail} />
        <Route path='*' render={() => <div className="container section"> <ErrorPage text='Page not Found' title='Error' /></div>} />
    </Switch>
)

export default Routes;