import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';

class ProjectShowNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   const projectId = this.props.match.params.projectId;
  //   this.props.fetchProject(projectId);
  // }

  toggleShowSidebar() {
    const sidebar = document.getElementById('ps-sidebar-container');
    const burger = document.getElementById('ps-burger');
    sidebar.classList.remove('hidden');
    burger.classList.add('hidden');
  }

  render() {
    let display
    const { project } = this.props;
    if (project) {
      display = <div>{project.title} {project.description}</div>
    } else {
      display = <div>Not fetched</div>
    }

    return (
      <div className='ps-nav-bar-parent'>
        <svg onClick={this.toggleShowSidebar} id='ps-burger' className='nav-burger-icon hidden' viewBox='0 0 32 32'>
          <path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path>
        </svg>
        <h1>{project.title}</h1>
        <button onClick={this.props.logout}>Log out</button>
        <div className='nb-user-util-icon'>AC</div>
      </div>
    )
    // return ( 
    //   <div>
    //     {/* {this.props.project.title} */}
    //     {/* <div>{display}</div> */}
    //     <h1>Title: {project.title}</h1>
    //     <br/>
    //     <h2>Description: {project.description}</h2>
    //   </div>
    // )
  }
};

export default ProjectShowNavBar;