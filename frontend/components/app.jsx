import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';
import NewProjectPageContainer from './projects/new_project_page/new_project_page_container';
import ProjectShowContainer from './projects/project_show/project_show_container';
import EditProjectFormContainer from './projects/edit_project/edit_project_form_container';

const App = () => (
  <div className='app'>
    <Modal />
    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/home' component={HomeContainer}/>
      <ProtectedRoute exact path='/projects/:projectId' component={ProjectShowContainer}/>
      <ProtectedRoute path='/projects/new' component={NewProjectPageContainer}/>
      <ProtectedRoute exact path='/projects/update/:projectId' component={EditProjectFormContainer}/>
    </Switch>
  </div>
);

export default App;