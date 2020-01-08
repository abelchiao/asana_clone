import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import UtilBarContainer from './util_bar/util_bar_container';

const App = () => (
  <div>
    <UtilBarContainer />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;