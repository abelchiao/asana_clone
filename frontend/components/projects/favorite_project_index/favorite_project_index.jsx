import React from 'react'
import RecentProjectIndexItem from '../recent_project_index/recent_project_index_item';

class FavoriteProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchProjects();
  };

  render() {
    if (!this.props.projects) return null;
    const { projects, deleteProject, openModal, closeModal } = this.props;
    return (
      <div className='project-index-container'>
        <div className='project-grid'>
          {
            projects.map(project => (
              <RecentProjectIndexItem
                key={project.id}
                project={project}
                deleteProject={deleteProject}
                openModal={openModal}
                closeModal={closeModal}
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