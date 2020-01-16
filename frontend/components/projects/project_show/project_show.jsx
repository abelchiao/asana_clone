import React from 'react';
import SideBarContainer from '../../side_bar/side_bar_container';
import ProjectShowNavBar from '../project_show/project_show_nav_bar';
import ProjectShowNavBarContainer from '../project_show/project_show_nav_bar_container';
import SectionIndexContainer from '../../sections/section_index_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render() {
    // if (!this.props) return null;
    if (!this.props.project) return null;

    const { project, logout, createProject, closeModal } = this.props;
    return (
      <div className='project-show-parent'>
        <div id='ps-sidebar-container' className='side-bar-container'>
          <SideBarContainer />
        </div>
        <div className='project-show-main'>
          <div className='project-show-navbar'>
            <ProjectShowNavBarContainer 
              project={project} 
              logout={logout} 
              createProject={createProject} 
              closeModal={closeModal}
            />
          </div>
          <div className='project-show-contents'>
            Project stuff (sections, tasks) go here
            {/* <SectionIndexContainer projectId={project.id} /> */}
            <SectionIndexContainer />
          </div>
        </div>
      </div>
    );
  };
}

export default ProjectShow;