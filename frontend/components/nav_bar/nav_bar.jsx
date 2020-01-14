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

  render() {
    const navBar = this.props.currentUser ? (
      <div>
        {/* <h1>{this.props.pageTitle}</h1> */}
        <div>Hello, {this.props.currentUser.first_name}</div>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div>
        {/* <div>search, add, dropdown</div> */}
        <Link className='session-link' to='/signup'>Sign Up</Link>
        <Link className='session-link' to='/login'>Log In</Link>
      </div>
    );

    return (
      <div className='nav-bar-parent'>
        <svg onClick={this.toggleShowSidebar} id='home-burger' className='nav-burger-icon hidden' viewBox='0 0 32 32'>
          <path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path>
        </svg>
        <h1>Home</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )

    // from when trying to use same nav bar for splash and home
    // return (
    //   <div className='nav-bar-parent'>
    //     <h1 className='nav-title'>Not-sana</h1>
    //     <div>
    //       {navBar}
    //     </div>
    //   </div>
    // )
  }
}

export default NavBar;
