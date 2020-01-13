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
        <div className='home-content'>
          <div className='side-bar-container'>
            <SideBarContainer />
          </div>
          <div className='home-main'>
            <NavBarContainer />
            Home Page!
            <RecentProjectIndexContainer />
            {/* <Link to='/projects/new'>Create Project</Link> */}
            {this.props.createProject}
          </div>
          
        </div>
      </div>
    );
  };
};

export default Home;