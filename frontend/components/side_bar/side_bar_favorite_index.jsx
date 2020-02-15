import React from 'react';

class SideBarFavoriteIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { favoriteProjects } = this.props;
    return (
      <div>
        {
          Object.values(favoriteProjects).map(project => (
            <div>{project.title}</div>
          ))
        }
      </div>
    )
  }
}

export default SideBarFavoriteIndex;