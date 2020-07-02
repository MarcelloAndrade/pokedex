import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Pokedex from '../pages/Pokedex';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />        
        <Route path="/pokedex" component={Pokedex}/>
    </Switch>
)

export default Routes;