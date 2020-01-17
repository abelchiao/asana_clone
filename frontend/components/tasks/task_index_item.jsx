import React from 'react';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.revealTaskDropdown = this.revealTaskDropdown.bind(this);
  };

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteTask(this.props.task.id);
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
    const { task } = this.props;
    return (
      <div className='task-index-item-parent'>
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
              <div className='task-dropdown-item'>
                Edit task details
              </div>
              <div onClick={this.handleDelete} className='task-dropdown-item'>
                Delete task
              </div>
            </div>
        </div>
      </div>
    </div>
    );
  };
};

export default TaskIndexItem;