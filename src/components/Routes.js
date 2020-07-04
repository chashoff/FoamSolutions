import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Contact from '../views/Contact';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        );
    }
}
export default Routes;
