import React from 'react';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props.task) return null;
    const { task } = this.props;
    return (
      <div className='task-index-item-parent'>
        <div className='task-index-item-content'>
          Task Index Item
          task: {task.title}
        </div>
      </div>
    );
  };
};

export default TaskIndexItem;