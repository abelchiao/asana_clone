import React from 'react';
import SectionIndexItem from './section_index_item';
import { withRouter } from 'react-router-dom';

class SectionIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      project_id: this.props.match.params.projectId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.projectId !== this.props.match.params.projectId) {
      this.setState({ 
        title: '',
        project_id: this.props.match.params.projectId
      });
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSection(this.state)
      .then(this.setState({ title: '' }))
    const form = document.getElementById(`new-section-form-${this.props.projectId}`)
    if (form.classList.contains('show')) form.classList.remove('show')

  };

  revealForm() {
    const form = document.getElementById(`new-section-form-${this.props.projectId}`);
    form.classList.toggle('show');
    const input = document.getElementById(`new-section-input-${this.props.projectId}`);
    input.focus();
  };

  render() {
    // debugger
    // if (!this.props) return null;
    return (
      <div className='section-index-parent'>
        <div className='section-index-content'>
          {
            (this.props.sections).map(section => (
              <SectionIndexItem key={section.id} section={section} createTask={this.props.createTask} deleteSection={this.props.deleteSection} />
            ))
          }
          <div className='new-section-form-container'>
            <div className='new-section-form-toggle' onClick={this.revealForm}>
              + Add Column
            </div>
            <form 
              onSubmit={this.handleSubmit} 
              className='new-section-form'
              id={`new-section-form-${this.props.projectId}`}
            >
              <input
                className='new-section-input'
                id={`new-section-input-${this.props.projectId}`}
                onChange={this.update('title')}
                type="text" 
                value={this.state.title}
                placeholder='Enter your new section here'
                onBlur={this.handleSubmit}
              />
              {/* <button type='submit'>Create column</button> */}
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(SectionIndex);