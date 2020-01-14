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