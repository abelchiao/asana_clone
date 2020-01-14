import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';

class ProjectShowNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleShowSidebar() {
    const sidebar = document.getElementById('ps-sidebar-container');
    const burger = document.getElementById('ps-burger');
    sidebar.classList.remove('hidden');
    burger.classList.add('hidden');
  }

  revealDropdown() {
    document.getElementById('ps-nav-user-dropdown-content').classList.toggle('show')
  }

  render() {
    return (
      <div className='ps-nav-bar-parent'>
        <div className='ps-nav-left-items'>
          <svg onClick={this.toggleShowSidebar} id='ps-burger' className='nav-burger-icon hidden' viewBox='0 0 32 32'>
            <path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path>
          </svg>
          <h1>{this.props.project.title}</h1>
        </div>
        <div onClick={this.revealDropdown} className='ps-user-dropdown-parent'>
          <div className='nb-user-util-icon'>AC</div>
          <div
            id='ps-nav-user-dropdown-content'
            className='ps-nav-user-dropdown-content'
          >
            {this.props.createProject}
            <div className='ps-nav-dropdown-content-item' onClick={this.props.logout}>
              Sign out
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ProjectShowNavBar;