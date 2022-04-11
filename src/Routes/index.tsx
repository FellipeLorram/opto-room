import React from 'react';
import { Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Login } from '../Pages/Login/Index';
import MyRoute from './MyRoute';
import { Navbar } from '../Widgets/Navbar/Index';
import Main from '../Components/Main/Index';
import { Dashoard } from '../Pages/Dashboard/Index';
import Appwrapper from '../Components/AppWrapper/Index';
import { Topbar } from '../Widgets/Topbar/Index';
import Patients from '../Pages/Patients';
import PatientPage from '../Pages/PatientPage/Index';
import UpgradePage from '../Pages/UpgradePlanPage';
import AppoitmentPage from '../Pages/Appoitment/Index';

const Routes = (): React.ReactElement => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <MyRoute path="/login" component={Login} isClosed={false} />
        <MyRoute path="/upgrade-my-plan" component={UpgradePage} isClosed />
        <MyRoute path="/:patientId/new-appoitment" component={AppoitmentPage} isClosed />
        <Appwrapper>
          <Navbar />
          <Main>
            <Topbar />
            <MyRoute path="/dashboard" component={Dashoard} isClosed />
            <MyRoute path="/patients" component={Patients} isClosed />
            <MyRoute path="/new-patient" component={PatientPage} isClosed />
            <MyRoute path="/patient/:id" component={PatientPage} isClosed />
          </Main>
        </Appwrapper>
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
