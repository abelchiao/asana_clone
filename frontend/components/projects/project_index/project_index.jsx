import React from 'react'

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    // debugger
    return (
      <div>
        <h1>Project Index</h1>
        {
          this.props.projects.map(project => <div key={project.id}>{project.title}</div>)
        }
      </div>
    );
  };
};

export default ProjectIndex;