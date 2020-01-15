import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <Redirect to='/home' />
        <NavBarContainer />
        Splash page!
      </div>
    );
  };
};

export default Splash;