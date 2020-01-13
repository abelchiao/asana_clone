import React from 'react'
import RecentProjectIndexItem from './recent_project_index_item';

class RecentProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    const { projects } = this.props;

    return (
      <div className='project-index-container'>
        <h1>Recent Projects</h1>
        <div className='project-list'>
          {projects.map(project => <RecentProjectIndexItem key={project.id} project={project} />)}
          {/* {
            this.props.projects.map(project => (
              <div key={project.id}>
                <img className='list-icon' src={window.listIcon} />
                <div key={project.id}>{project.title}</div>
              </div>
            ))
          } */}
        </div>
      </div>
    );
  };
};

export default RecentProjectIndex;