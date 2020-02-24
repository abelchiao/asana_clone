import React from 'react';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskOrder: this.props.section.taskOrder,
      tasks: this.props.tasks
    }
  };

  // componentDidMount() {
  //   const { fetchTasks, sectionId } = this.props;
  //   fetchTasks(sectionId);
  // };

//   render() {
//     if (!this.props.tasks) return null;
//     const { tasks, deleteTask } = this.props;
//     console.log(this.state.taskOrder)
//     return (
//       <div className='task-index-parent'>
//         {
//           tasks.map(task => (
//             <TaskIndexItem key={task.id} task={task} deleteTask={deleteTask} />
//           ))
//         }
//       </div>
//     );
//   };
// };

  render() {
    if (!this.props.tasks) return null;
    console.log('task index props: ', this.props)
    const { deleteTask } = this.props;
    const { taskOrder, tasks } = this.state
    return (
      <div className='task-index-parent'>
        {
          this.props.section.taskOrder.map((taskId, index) => (
            <TaskIndexItem 
              key={taskId}
              index={index}
              task={this.props.tasks[taskId]}
              deleteTask={deleteTask}
            />
          ))
        }
      </div>
    );
  };
};

export default TaskIndex