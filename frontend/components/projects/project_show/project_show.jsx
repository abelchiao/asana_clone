import React from 'react';
import SideBarContainer from '../../side_bar/side_bar_container';
import ProjectShowNavBarContainer from '../project_show/project_show_nav_bar_container';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    // debugger
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render() {
    const { project } = this.props;
    let display
    if (project) {
      display = <h1>{project.title}</h1>
    } else {
      display = <div>Not fetched</div>
    }
    // debugger
    return (
      <div className='project-show-parent'>
        <div className='side-bar-container'>
          <SideBarContainer />
        </div>
        <div className='project-show-main'>
          <div className='project-show-navbar'>
            <ProjectShowNavBarContainer />
          </div>
        </div>
        {display}
      </div>
    );
  };
}

export default ProjectShow;