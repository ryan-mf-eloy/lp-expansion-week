import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;