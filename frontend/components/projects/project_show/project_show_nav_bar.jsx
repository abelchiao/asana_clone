import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class ProjectShowNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.props.fetchProject(projectId);
  }

  render() {
    debugger
    return ( 
      <div>
        <Link to='/home'>Home</Link>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    )
  }
};

export default withRouter(ProjectShowNavBar);