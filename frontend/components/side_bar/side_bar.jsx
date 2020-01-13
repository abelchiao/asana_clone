import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className='side-bar-parent'>
        Sidebar here
        <div>
          Logo
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

export default SideBar;