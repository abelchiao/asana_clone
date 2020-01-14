import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideBarContainer from '../side_bar/side_bar_container'
import { Link } from 'react-router-dom';
import RecentProjectIndexContainer from '../projects/recent_project_index/recent_project_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className='home-parent'>
        {/* <img src={window.waterBackground} alt="sfasfa"/> */}
        <div className='home-all'>
          <div className='side-bar-container'>
            <SideBarContainer />
          </div>
          <div className='home-main'>
            <div className='home-navbar'>
              <NavBarContainer />
            </div>
            <div className='home-content'>
              Home Page!
              <div className='home-category-header'>
                <div className='category-toggle-triangle'>
                  <img src={window.downTriangle} />
                </div>
                <h2 className='home-category-title'>Recent projects</h2>
              </div>
              <RecentProjectIndexContainer />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;