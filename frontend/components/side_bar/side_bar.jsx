import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
          <div>Home</div>
          <div>My Tasks</div>
          <div>Inbox</div>
          <div>Portfolios</div>
        </div>
        <div className='side-bar-favs-container'>
          Favorites
        </div>
        <div>
          Teams/Projects
        </div>
      </div>
    );
  };
};

export default withRouter(SideBar);