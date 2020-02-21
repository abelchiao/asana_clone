import React from 'react'
import FavoriteProjectIndexItem from '../favorite_project_index/favorite_project_index_item';

class FavoriteProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchProjects();
  };

  render() {
    if (!this.props.projects) return null;
    const { 
      projects, 
      deleteProject, 
      openModal, 
      closeModal, 
      currentUser,
      createFavorite,
      removeFavorite
    } = this.props;
    return (
      <div className='project-index-container'>
        <div className='project-grid'>
          {
            projects.map(project => (
              <FavoriteProjectIndexItem
                key={project.id}
                project={project}
                deleteProject={deleteProject}
                openModal={openModal}
                closeModal={closeModal}
                currentUser={currentUser}
                createFavorite={createFavorite}
                removeFavorite={removeFavorite}
              />
            ))
          }
          {/* {this.props.createProject} */}
        </div>
      </div>
    );
  };
};

export default FavoriteProjectIndex;