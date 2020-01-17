import React from 'react';
import SectionIndexItem from './section_index_item';
import { withRouter } from 'react-router-dom';

class SectionIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      project_id: this.props.projectId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSection(this.state)
  };

  render() {
    // debugger
    // if (!this.props) return null;
    return (
      <div className='section-index-parent'>
        
        <div className='section-index-header'>
        </div>
        <div className='section-index-content'>
          {
            (this.props.sections).map(section => (
              <SectionIndexItem key={section.id} section={section} createTask={this.props.createTask} deleteSection={this.props.deleteSection} />
            ))
          }
          <div className='new-section-form-container'>
            <div className='new-section-form-toggle'>+ Add Column</div>
            <form onSubmit={this.handleSubmit} className='new-section-form'>
              <input onChange={this.update('title')} type="text"/>
              <button type='submit'>Create column</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(SectionIndex);