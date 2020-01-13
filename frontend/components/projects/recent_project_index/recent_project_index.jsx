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
        <div className='project-grid'>
          {
            projects.map(project => (
              <RecentProjectIndexItem key={project.id} project={project} />
            ))
          }
        </div>
      </div>
    );
  };
};

export default RecentProjectIndex;