import React from 'react';
import TaskIndexContainer from '../tasks/task_index_container';
import { withRouter } from 'react-router-dom';

class SectionIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      section_id: this.props.section.id,
      renderForm: false,
      sectionTitle: this.props.section.title,
      // taskOrder: this.props.section.taskOrder
    }
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
    this.handleDeleteSection = this.handleDeleteSection.bind(this);
    this.revealForm = this.revealForm.bind(this);
    this.handleUpdateSectionTitle = this.handleUpdateSectionTitle.bind(this);
  };

  componentDidMount() {
    const sectionHeader = document.getElementById(`section-index-item-header-${this.props.section.id}`);
    sectionHeader.onmouseover = function () {
      this.parentElement.style = 'border: 1px solid #fff; padding: 7px;'
    }
    sectionHeader.onmouseout = function() {
      this.parentElement.style = '';
    }
  }

  handleSubmitTask(e) {
    e.preventDefault();
    const { title, section_id } = this.state;
    this.props.createTask({ title, section_id });
    const form = document.getElementById(`create-task-${this.props.section.id}`)
    if (form.classList.contains('show')) form.classList.remove('show')
  };

  handleDeleteSection(e) {
    e.preventDefault();
    this.props.deleteSection(this.props.section.id);
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
    const { section } = this.props;
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
            // type="text"
            onBlur={this.handleSubmitTask}
            // autoFocus
          />
          {/* <button type='submit'>submit</button> */}
        </form>
        <TaskIndexContainer 
          sectionId={section.id} 
          taskOrder={this.props.section.taskOrder}
        />
      </div>
    )
  }
}

export default withRouter(SectionIndexItem);