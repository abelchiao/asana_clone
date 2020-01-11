import React from 'react'

class RecentProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div className='project-index-container'>
        <h1>Recent Projects</h1>
        <div className='project-list'>
          {
            this.props.projects.map(project => <div key={project.id}>{project.title}</div>)
          }
        </div>
      </div>
    );
  };
};

export default RecentProjectIndex;