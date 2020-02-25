import React from 'react';
import TaskIndexItem from './task_index_item';
import { Droppable } from 'react-beautiful-dnd';

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
    // console.log('task index props: ', this.props)
    const { deleteTask } = this.props;
    const { taskOrder, tasks } = this.state
    return (
      <Droppable droppableId={this.props.section.id.toString()}>
        {provided => (
          <div 
            className='task-index-parent'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {
              this.props.taskOrder.map((taskId, index) => (
                <TaskIndexItem 
                  key={taskId}
                  index={index}
                  task={this.props.tasks[taskId]}
                  deleteTask={deleteTask}
                  section={this.props.section}
                  updateSection={this.props.updateSection}
                />
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };
};

export default TaskIndex