import React from 'react';
import SideBarFavoriteIndexItem from './side_bar_favorite_index_item';

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
            <SideBarFavoriteIndexItem key={project.id} project={project} />
          ))
        }
      </div>
    )
  }
}

export default SideBarFavoriteIndex;