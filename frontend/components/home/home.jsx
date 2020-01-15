import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideBarContainer from '../side_bar/side_bar_container'
import { Link } from 'react-router-dom';
import RecentProjectIndexContainer from '../projects/recent_project_index/recent_project_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props)
  };

  toggleProjects() {
    if (!document.getElementById('project-toggle-section').classList.contains('hidden')) {
      document.getElementById('project-toggle-section').classList.add('hidden');
      document.getElementById('project-down-triangle').classList.add('hidden');
      document.getElementById('project-right-triangle').classList.remove('hidden');
    } else {
      document.getElementById('project-toggle-section').classList.remove('hidden');
      document.getElementById('project-down-triangle').classList.remove('hidden');
      document.getElementById('project-right-triangle').classList.add('hidden');
    }
  }

  render() {
    return (
      <div className='home-parent'>
        <div className='home-all'>
          <div id='home-sidebar-container' className='side-bar-container'>
            <SideBarContainer />
          </div>
          <div className='home-main'>
            <div className='home-navbar'>
              <NavBarContainer />
            </div>
            <div className='home-content'>
              <div className='home-category-header'>
                <div onClick={this.toggleProjects} className='home-projects-category-collapse-toggle'>
                  <svg id='project-down-triangle' className='home-category-collapse-down-triangle' viewBox='0 0 32 32'>
                    <path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z"></path>
                  </svg>
                  <svg id='project-right-triangle' className='home-category-collapse-right-triangle hidden' viewBox='0 0 32 32'>
                    <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z"></path>
                  </svg>
                  <h2 className='home-category-title'>Recent projects</h2>
                </div>
              </div>
              <div id='project-toggle-section'>
                <RecentProjectIndexContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;