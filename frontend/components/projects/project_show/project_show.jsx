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
    const { project, logout } = this.props;
    let display
    let navBar
    if (project) {
      display = <h1>{project.title}</h1>;
      navBar = <ProjectShowNavBar project={project} logout={logout} />
    } else {
      display = <div>Not fetched</div>
      navBar = <div>Navbar broken</div>
    }

    return (
      <div className='project-show-parent'>
        {/* <div className='project-show-all'> */}
          <div className='side-bar-container'>
            <SideBarContainer />
          </div>
          <div className='project-show-main'>
            <div className='project-show-navbar'>
              {/* <ProjectShowNavBar /> */}
              {/* <ProjectShowNavBar project={this.props.project} logout={this.props.logout} /> */}
              {navBar}
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  };
}

export default ProjectShow;