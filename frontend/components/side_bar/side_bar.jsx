import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        Sidebar here
        <div>
          Logo
        </div>
        <div>
          Home, My Tasks, Inbox, Portfolios
        </div>
        <div>
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