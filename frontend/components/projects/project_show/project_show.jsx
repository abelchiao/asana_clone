import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render() {
    // const { project } = this.props;
    return (
      <div>
        hello
      </div>
    );
  };
}

export default ProjectShow;