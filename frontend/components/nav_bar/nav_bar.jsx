import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const navBar = this.props.currentUser ? (
      <div>
        <div>Hello, {this.props.currentUser.first_name}</div>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div>
        <div>search, add, ?</div>
        <Link className='session-link' to='/signup'>Sign Up</Link>
        <Link className='session-link' to='/login'>Log In</Link>
      </div>
    );

    return (
      <div>
        <h1>Not-sana</h1>
        {navBar}
      </div>
    )
  }
}

export default NavBar;
