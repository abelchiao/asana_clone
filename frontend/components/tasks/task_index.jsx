import React from 'react';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  // componentDidMount() {
  //   const { fetchTasks, sectionId } = this.props;
  //   fetchTasks(sectionId);
  // };

  render() {
    if (!this.props.tasks) return null;
    const { tasks } = this.props;
    return (
      <div className='task-index-parent'>
        Task Index
        {
          tasks.map(task => (
            <TaskIndexItem key={task.id} task={task} />
          ))
        }
      </div>
    );
  };
};

export default TaskIndex