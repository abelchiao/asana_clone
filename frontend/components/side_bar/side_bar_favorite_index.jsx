import React from 'react';
import SideBarFavoriteIndexItem from './side_bar_favorite_index_item';

class SideBarFavoriteIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProjects();
  };

  render() {
    const { favoriteProjects, deleteProject, openModal, removeFavorite } = this.props;
    return (
      <div>
        {
          Object.values(favoriteProjects).map(project => (
            <SideBarFavoriteIndexItem 
              key={project.id}
              project={project}
              deleteProject={deleteProject}
              openModal={openModal}
              removeFavorite={removeFavorite}
            />
          ))
        }
      </div>
    );
  };
};

export default SideBarFavoriteIndex;