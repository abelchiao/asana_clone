import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
    let taskOrder = this.props.section.taskOrder ? this.props.section.taskOrder : [];
    let taskId = this.props.taskId ? this.props.taskId.toString() : ''

    this.state = {
      taskOrder: taskOrder,
      // taskOrder: this.props.section.taskOrder,
      taskId: taskId
    }
    
    this.handleDelete = this.handleDelete.bind(this);
    this.revealTaskDropdown = this.revealTaskDropdown.bind(this);
  };

  componentDiDUpdate(prevProps) {
    if (prevProps.section.taskOrder !== this.props.section.taskOrder) {
      this.setState({
        taskOrder: this.props.section.taskOrder
      })
    }
    // if (prevProps.task !== this.props.task) {
    // // if (prevProps.section !== this.props.section) {
    //   this.setState({
    //     sections: this.props.sections
    //     // taskOrder: this.props.section.taskOrder
    //   })
    // }

    // if (prevProps.taskId !== this.props.taskId) {
    //   this.setState({
    //     taskId: this.props.taskId
    //   })
    // }
  }

  handleDelete(e) {
    e.stopPropagation();
    let updatedTaskOrder = this.props.section.taskOrder;
    console.log('tii handleDelete pre-delete taskOrder: ', updatedTaskOrder)
    console.log('tii handleDelete index: ', this.props.index)
    updatedTaskOrder.splice(this.props.index, 1)
    console.log('tii handleDelete post-delete taskOrder: ', updatedTaskOrder)
    this.setState({ taskOrder: updatedTaskOrder }, () => {
      this.props.deleteTask(this.props.task.id)
        .then(data => {
          this.props.updateSection({
            id: this.props.section.id,
            task_order: this.state.taskOrder
          });
        });
    });

    // this.props.deleteTask(this.props.task.id)
    //   .then(data => {
    //     updatedTaskOrder.splice(this.props.index, 1)
    //     this.setState({
    //       taskOrder: updatedTaskOrder
    //     })
    //     console.log('inside handle delete updatedTaskOrder: ', updatedTaskOrder)
    //     this.props.updateSection({ 
    //       id: this.props.section.id, 
    //       task_order: updatedTaskOrder 
    //     });
    //   })

    // this.props.deleteTask(this.props.task.id)
    //   .then(data => {
    //     updatedTaskOrder.splice(this.props.index, 1)
    //     this.setState({
    //       taskOrder: updatedTaskOrder
    //     })
    //     console.log('inside handle delete updatedTaskOrder: ', updatedTaskOrder)
    //     this.props.updateSection({ 
    //       id: this.props.section.id, 
    //       task_order: updatedTaskOrder 
    //     });
    //   })

    let dropdowns = document.getElementsByClassName('task-dropdown-contents');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  };

  revealTaskDropdown(e) {
    e.stopPropagation();
    const dropdown = document.getElementById(`task-item-${this.props.task.id}`)
    dropdown.classList.toggle('show');

    window.onclick = () => {
      let dropdowns = document.getElementsByClassName('task-dropdown-contents');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  render() {
    if (!this.props.task) return null;
    if (!this.props) return null;
    if (!this.props.taskId) return null;

    const { task } = this.props;

    return (
      <Draggable

        // testing
        draggableId={this.props.task.id.toString()}
        // draggableId={`${this.props.task.id}`}
        // key={this.props.task.id}
        index={this.props.index}
      >
        {(provided) => (
          <div 
            className='task-index-item-parent'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className='task-index-item-content'>
              <div>
                {task.title}
              </div>
              <div className='task-index-item-dropdown'>
                <svg 
                  onClick={this.revealTaskDropdown} 
                  className='task-dropdown-icon' 
                  viewBox='0 0 32 32'
                >
                  <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
                </svg>
                <div
                  id={`task-item-${task.id}`}
                  className='task-dropdown-contents'
                >
                  {/* <div className='task-dropdown-item'>
                    Edit task details
                  </div> */}
                  <div onClick={this.handleDelete} className='task-dropdown-item'>
                    Delete task
                  </div>
                </div>
            </div>
          </div>
        </div>
        )}
      </Draggable>
    );
  };
};

export default TaskIndexItem;