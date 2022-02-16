import React from 'react';
import { Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Login } from '../Pages/Login/Index';
import MyRoute from './MyRoute';
import { Navbar } from '../Widgets/Navbar/Index';
import Main from '../Components/Main/Index';
import { Dashoard } from '../Pages/Dashboard/Index';
import Appwrapper from '../Components/AppWrapper/Index';

const Routes = (): React.ReactElement => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <MyRoute path="/login" component={Login} isClosed={false} />
      </Switch>
      <Appwrapper>
        <Navbar />
        <Main>
          <Switch>
            <MyRoute path="/" component={Dashoard} isClosed />
          </Switch>
        </Main>
      </Appwrapper>
    </AnimatePresence>
  );
}

export default Routes;
