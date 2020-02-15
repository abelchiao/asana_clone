import React from 'react';

class SideBarFavoriteIndexItem extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.project.title}</div>
      </div>
    )
  }
}

export default SideBarFavoriteIndexItem;