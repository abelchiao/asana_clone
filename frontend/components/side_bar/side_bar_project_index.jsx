import React from 'react';
import SideBarProjectIndexItem from './side_bar_project_index_item';

class SideBarProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    if (!this.props) return null;
    const { projects, deleteProject, openModal, closeModal, fetchProject } = this.props;
    return (
      <div className='side-bar-project-index-parent'>
        {
          Object.values(projects).map(project => (
            <SideBarProjectIndexItem 
              key={project.id} 
              project={project}
              deleteProject={deleteProject}
              openModal={openModal}
              // closeModal={closeModal}
              // fetchProject = {fetchProject}
            />
          ))
        }
      </div>
    );
  };
};

export default SideBarProjectIndex;