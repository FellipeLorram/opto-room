import React from 'react';
import { Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Login } from '../Pages/Login/Index';
import MyRoute from './MyRoute';

const Routes = (): React.ReactElement => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <MyRoute path="/login" component={Login} isClosed={false} />
        <MyRoute path="/" component={Login} isClosed />
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
