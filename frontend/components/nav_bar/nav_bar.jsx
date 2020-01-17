import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleShowSidebar() {
    const sidebar = document.getElementById('home-sidebar-container');
    const burger = document.getElementById('home-burger');
    sidebar.classList.remove('hidden');
    burger.classList.add('hidden');
  }

  revealDropdown() {
    document.getElementById('home-nav-user-dropdown-content').classList.toggle('show')
  }

  render() {
    return (
      <div className='nav-bar-parent'>
        <div className='home-nav-left-items'>
          <svg onClick={this.toggleShowSidebar} id='home-burger' className='nav-burger-icon hidden' viewBox='0 0 32 32'>
            <path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path>
          </svg>
          <h1 className='home-nav-title'>Home</h1>
        </div>
        <div onClick={this.revealDropdown} className='home-user-dropdown-parent'>
          <div className='nb-user-util-icon'>DU</div>
          <div
            id='home-nav-user-dropdown-content' 
            className='home-nav-user-dropdown-content' 
          >
            {this.props.createProject}
            <div className='home-nav-dropdown-content-item' onClick={this.props.logout}>
              Sign out
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
