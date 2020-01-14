import React from 'react';
import SideBarContainer from '../../side_bar/side_bar_container';
import ProjectShowNavBar from '../project_show/project_show_nav_bar';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    // debugger
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render() {
    const { project, logout, createProject, closeModal } = this.props;
    let display
    let navBar
    if (project) {
      display = <h1>{project.title}</h1>;
      navBar = <ProjectShowNavBar project={project} logout={logout} createProject={createProject} closeModal={closeModal} />
    } else {
      display = <div>Not fetched</div>
      navBar = <div>Navbar broken</div>
    }

    return (
      <div className='project-show-parent'>
        <div id='ps-sidebar-container' className='side-bar-container'>
          <SideBarContainer />
        </div>
        <div className='project-show-main'>
          <div className='project-show-navbar'>
            {/* <ProjectShowNavBar /> */}
            {/* <ProjectShowNavBar project={this.props.project} logout={this.props.logout} /> */}
            {/* {navBar} */}
            <ProjectShowNavBar project={project} logout={logout} createProject={createProject} closeModal={closeModal} />
          </div>
        </div>
      </div>
    );
  };
}

export default ProjectShow;