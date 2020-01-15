import React from 'react'
import RecentProjectIndexItem from './recent_project_index_item';
import { createProject } from '../../../util/project_api_util';

class RecentProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
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
                openModal = {openModal}
                closeModal = {closeModal}
              />
            ))
          }
          {this.props.createProject}
          {/* <div className='project-tile'>
            <div className='new-project-icon'>
              <svg className='svg-plus-icon' viewBox='0 0 32 32'>
                <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
              </svg>
            </div>
            <div className='tile-project-title'>New Project</div>
          </div> */}
        </div>
      </div>
    );
  };
};

export default RecentProjectIndex;