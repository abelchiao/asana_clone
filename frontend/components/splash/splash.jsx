import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <NavBarContainer />
        Splash page!
      </div>
    );
  };
};

export default Splash;