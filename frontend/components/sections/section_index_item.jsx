import React from 'react';
import TaskIndexContainer from '../tasks/task_index_container';
import TaskIndexItem from '../tasks/task_index_item';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class SectionIndexItem extends React.Component {
  constructor(props) {
    super(props)
    // debugger
    // console.log('constructor props: ', props)
    // console.log('constructor this props: ', this.props)
    let sectionTitle = this.props.section ? this.props.section.title : '';
    // let taskOrder = this.props.section ? this.props.section.taskOrder : [];
    let taskOrder = this.props.taskOrder ? this.props.taskOrder : [];
    let section = this.props.section ? this.props.section : {};
    let sectionOrder = this.props.project ? this.props.project.sectionOrder : [];

    this.state = {
      title: '',
      renderForm: false,
      // renderComponent: false,
      // section_id: this.props.section.id,
      sectionTitle: sectionTitle,
      taskOrder: taskOrder,
      section: section,
      sectionOrder: sectionOrder
    }
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
    this.handleDeleteSection = this.handleDeleteSection.bind(this);
    this.revealForm = this.revealForm.bind(this);
    this.handleUpdateSectionTitle = this.handleUpdateSectionTitle.bind(this);
  };

  componentDidMount() {
    if (!this.props.section) return;
    const sectionHeader = document.getElementById(`section-index-item-header-${this.props.section.id}`);
    sectionHeader.onmouseover = function () {
      this.parentElement.style = 'border: 1px solid #fff; padding: 7px;'
    }
    sectionHeader.onmouseout = function() {
      this.parentElement.style = '';
    }
    // console.log('inside component did mount')
    // console.log('component did mount section props: ', this.props.section)
  }

  // componentDidUpdate(prevProps) {
  //   if (!this.props.section) return;

  //   if (prevProps.section !== this.props.section) {
  //     this.setState({
  //       sectionTitle: this.props.section.title,
  //       // taskOrder: this.props.section.taskOrder,
  //       section: this.props.section,
  //       sectionOrder: this.props.project.sectionOrder
  //     })
  //   }

  //   if (prevProps.taskOrder !== this.props.taskOrder) {
  //     this.setState({
  //       taskOrder: this.props.taskOrder
  //     })
  //   }
  // }

  handleSubmitTask(e) {
    e.preventDefault();
    let updatedTaskOrder = this.state.taskOrder;
    // const { title, section_id } = this.state;
    this.props.createTask({ 
      title: this.state.title, 
      section_id: this.props.section.id
    })
      .then(data => {
        updatedTaskOrder.unshift(data.task.id)
        this.setState({ taskOrder: updatedTaskOrder }, () => {
          this.props.updateSection({
            id: this.props.section.id,
            task_order: updatedTaskOrder
           }).then(data => {
             this.setState({
               section: data.section
             })
           })

        })
        // this.props.updateSection({ id: section_id, task_order: updatedTaskOrder});
      })
    

    const form = document.getElementById(`create-task-${this.props.section.id}`)
    this.setState({ title: '' })
    if (form.classList.contains('show')) form.classList.remove('show')
  };

  handleDeleteSection(e) {
    e.preventDefault();
    let updatedSectionOrder = this.state.sectionOrder
    this.props.deleteSection(this.props.section.id)
      .then(data => {
        updatedSectionOrder.splice(this.props.index, 1)
        this.setState({
          sectionOrder: updatedSectionOrder
        })
        this.props.updateProject({
          id: this.props.project.id,
          section_order: updatedSectionOrder
        });
      })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  revealForm() {
    const form = document.getElementById(`create-task-${this.props.section.id}`);
    form.classList.toggle('show');
    const input = document.getElementById(`create-task-textarea-${this.props.section.id}`);
    input.focus();
  }

  renderSectionTitle() {
    if (!this.state.renderForm) {
      return (
        <div
          className='section-index-item-title'
          onClick={() => this.setState({ renderForm: true })}
        >
          {this.props.section.title}
        </div> 
      )
    } else {
      return (
        <form className='section-index-item-title-form'>
          <input
            className='section-index-item-title-input'
            autoFocus 
            type="text" 
            value={this.state.sectionTitle}
            onChange={this.update('sectionTitle')}
            onBlur={this.handleUpdateSectionTitle}
          />
        </form>
      )
    }
  }

  handleUpdateSectionTitle() {
    const section = {
      title: this.state.sectionTitle,
      id: this.props.section.id
    }
    this.props.updateSection(section)
      .then(() => this.setState({ renderForm: false }))
  }

  render() {
    if (!this.props.section) return null
    // console.log('SII sectionId, taskOrder: ', this.props.section.id, this.props.section.taskOrder)
    // debugger
    // if (!this.state.renderComponent) return null
    // if (!this.state.section_id) return null
    const { section, deleteTask, taskOrder } = this.props;
    // console.log('section-index-item props: ', this.props)
    return (
      <div className='section-index-item-parent' id='section-index-item-parent'>
        <div className='section-index-item-header' id={`section-index-item-header-${section.id}`}>
          {this.renderSectionTitle()}
          <div>
            <svg 
              onClick={this.handleDeleteSection}
              className='section-index-delete-icon' 
              viewBox='0 0 448 512'
            >
              <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
            </svg>
          </div>
        </div>
        <div onClick={this.revealForm} className='reveal-task-form-button'>
          <svg className='new-task-plus-icon' viewBox='0 0 32 32'>
            <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
          </svg>
        </div>
        <form 
          id={`create-task-${section.id}`}
          className='task-create-form' 
          onSubmit={this.handleSubmit}
        >
          <textarea
            className='task-create-input'
            id={`create-task-textarea-${section.id}`}
            onChange={this.update('title')}
            value={this.state.title}
            placeholder='New task'
            onBlur={this.handleSubmitTask}
          />
        </form>

        {/* Formerly TaskIndex */}
        <Droppable droppableId={this.props.section.id.toString()}>
          {provided => (
            <div
              className='task-index-parent'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                // this.state.taskOrder.map((taskId, index) => (
                // this.props.taskOrder.map((taskId, index) => (
                this.props.section.taskOrder.map((taskId, index) => (
                  <TaskIndexItem
                    key={taskId.toString()}
                    index={index}
                    taskId={taskId}
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

        {/* <DragDropContext onDragEnd={this.onDragEnd}> */}
          {/* <TaskIndexContainer 
            sectionId={section.id} 
            section={section}
            taskOrder={taskOrder}
          /> */}
        {/* </DragDropContext> */}
      </div>
    )
  }
}

export default withRouter(SectionIndexItem);