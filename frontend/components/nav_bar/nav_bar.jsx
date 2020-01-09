import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
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
        <h1 className='nav-title'>Not-sana</h1>
        {/* <h2>{this.props.pageTitle}</h2> */}
        {navBar}
      </div>
    )
  }
}

export default NavBar;
