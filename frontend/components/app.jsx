import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/home' component={HomeContainer}/>
    </Switch>
  </div>
);

export default App;