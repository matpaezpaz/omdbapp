import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './component/ErrorPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='*' component={ErrorPage} />
    </Switch>
)

export default Routes;