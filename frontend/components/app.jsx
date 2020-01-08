import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UtilBarContainer from './util_bar/util_bar_container';
import HomeContainer from './home/home_container';

const App = () => (
  <div>
    {/* <UtilBarContainer /> */}
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/home' component={HomeContainer}/>
  </div>
);

export default App;