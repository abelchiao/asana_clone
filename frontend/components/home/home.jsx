import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideBarContainer from '../side_bar/side_bar_container'

class Home extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className='home-parent'>
        <SideBarContainer />
        <div className='home-main'>
          <NavBarContainer />
          Home Page!
        </div>
      </div>
    );
  };
};

export default Home;