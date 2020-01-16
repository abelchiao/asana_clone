import React from 'react';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props.task) return null;
    const { task } = this.props;
    return (
      <div>
        Task Index Item
        task: {task.title}
      </div>
    );
  };
};

export default TaskIndexItem;