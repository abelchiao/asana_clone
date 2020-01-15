import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideBarProjectIndexContainer from './side_bar_project_index_container';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHideSidebar = this.toggleHideSidebar.bind(this);
  };

  toggleHideSidebar() {
    // const sidebar = document.getElementsByClassName('side-bar-container');
    // const burger = document.getElementByClassName('nav-burger-icon');
    // sidebar.forEach(bar => bar.classList.add('hidden'));
    // burger.forEach(burger => burger.classList.remove('hidden'));

    switch (this.props.match.path) {
      case '/projects/:projectId':
        const psSidebar = document.getElementById('ps-sidebar-container');
        const psBurger = document.getElementById('ps-burger');
        psSidebar.classList.add('hidden');
        psBurger.classList.remove('hidden');
        break;
      case '/home':
        const homeSidebar = document.getElementById('home-sidebar-container');
        const homeBurger = document.getElementById('home-burger');
        homeSidebar.classList.add('hidden');
        homeBurger.classList.remove('hidden');
        break;
    };
    // const psSidebar = document.getElementById('ps-sidebar-container');
    // const psBurger = document.getElementById('ps-burger');
    // psSidebar.classList.add('hidden');
    // psBurger.classList.remove('hidden');
  };

  render() {
    return (
      <div className='side-bar-parent'>
        <div className='side-bar-header'>
            <Link className='side-bar-logo-link' to='/home'>
              <img className='side-bar-logo' src={window.coloredLogo} />
            </Link>
            <div>
              <svg className='side-burger-icon' onClick={this.toggleHideSidebar} viewBox='0 0 50 32'>
                <path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"></path>
                <path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"></path>              
                <path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"></path>
                <path d="M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2   c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z"></path>
              </svg>
            </div>
        </div>
        <div className='side-bar-nav-link-container'>
          <Link to='/home' className='side-bar-link'>
            <svg className='side-bar-link-icon' viewBox='0 0 40 40'>
              <path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path>
            </svg>
            Home
          </Link>
          <div>My Tasks</div>
          <div>Inbox</div>
          <div>Portfolios</div>
        </div>
        <div className='side-bar-favs-container'>
          Favorites
        </div>
        <div>
          <SideBarProjectIndexContainer />
        </div>
      </div>
    );
  };
};

export default withRouter(SideBar);