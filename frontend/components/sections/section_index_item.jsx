import React from 'react';
import TaskIndexContainer from '../tasks/task_index_container';
import { withRouter } from 'react-router-dom';

class SectionIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      section_id: this.props.section.id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteSection = this.handleDeleteSection.bind(this);
    this.revealForm = this.revealForm.bind(this);
  };

  // componentDidMount() {
  //   $(document).click(() => {
  //     const form = $(`#create-task-${this.props.sectionId}`);
  //     if (form.value) form.submit();
  //   });
  //   $(`#create-task-${this.props.sectionId}`).click(function (e) {
  //     e.stopPropagation();
  //   });
  // }

  // componentDidMount() {
  //   $(document).click(() => {
  //     if ($(`#create-task-${this.props.sectionId}`).value) {
  //       $(`#create-task-${this.props.sectionId}`).submit();
  //     }
  //   });

  //   $(`#create-task-${this.props.sectionId}`).click(e => {
  //     e.stopPropagation();
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state);
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
    const form = document.getElementById(`create-task-${this.props.section.id}`)
    form.classList.toggle('show')
    form.focus()

    // $(document).click(() => {
    //   console.log('hello1')
    //   if ($(`#create-task-${this.props.sectionId}`).value) {
    //     console.log('hello')
    //     $(`#create-task-${this.props.sectionId}`).submit();
    //   }
    // });

    // $(`#create-task-${this.props.sectionId}`).click(e => {
    //   e.stopPropagation();
    // });
  }

  render() {
    if (!this.props.section) return null
    const { section } = this.props;
    return (
      <div className='section-index-item-parent'>
        <div className='section-index-item-header'>
          <h1 className='section-index-item-title'>{section.title}</h1> 
          <svg onClick={this.handleDeleteSection}className='section-index-delete-icon' viewBox="0 0 448 512">
            <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
          </svg>
        </div>
        <div onClick={this.revealForm} className='reveal-task-form-button'>+</div>
        <form 
          id={`create-task-${section.id}`}
          className='task-create-form' 
          onSubmit={this.handleSubmit}
        >
          <textarea
            className='task-create-input'
            onChange={this.update('title')}
            value={this.state.title}
            placeholder='Enter your new task here'
            // type="text"
            onBlur={this.handleSubmit}
            // autoFocus
          />
          {/* <button type='submit'>submit</button> */}
        </form>
        <TaskIndexContainer sectionId={section.id} />
      </div>
    )
  }
}

export default withRouter(SectionIndexItem);