import React from 'react';
import SectionIndexItem from './section_index_item';
import { withRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

class SectionIndex extends React.Component {
  constructor(props) {
    super(props)
    // let sections = this.props.sections ? this.props.sections : {};

    this.state = {
      title: '',
      project_id: this.props.match.params.projectId,
      project: this.props.project,
      // sections: sections,
      sections: this.props.sections,
      sectionOrder: this.props.project.sectionOrder
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.projectId !== this.props.match.params.projectId) {
      this.setState({ 
        title: '',
        project_id: this.props.match.params.projectId,
        sectionOrder: this.props.sectionOrder
      });
      // this.props.fetchProject(this.props.match.params.projectId)
    };
    
    if (prevProps.sections !== this.props.sections) {
      this.setState({
        sections: this.props.sections
      })
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    let updatedSectionOrder = this.state.sectionOrder
    this.props.createSection(this.state)
      .then(data => {
        updatedSectionOrder.push(data.section.id)
        this.setState({ sectionOrder: updatedSectionOrder }, () => {
          this.props.updateProject({
            id: this.props.project.id,
            section_order: updatedSectionOrder
          })
        })
      })
    this.setState({ title: '' })
    const form = document.getElementById(`new-section-form-${this.props.projectId}`)
    if (form.classList.contains('show')) form.classList.remove('show');
    const toggle = document.getElementById(`new-section-toggle-${this.props.projectId}`);
    if (!toggle.classList.contains('show')) toggle.classList.toggle('show');
  };

  revealForm() {
    const toggle = document.getElementById(`new-section-toggle-${this.props.projectId}`);
    toggle.classList.toggle('show');
    const form = document.getElementById(`new-section-form-${this.props.projectId}`);
    form.classList.toggle('show');
    const input = document.getElementById(`new-section-input-${this.props.projectId}`);
    input.focus();
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.sections[source.droppableId];
    const finish = this.state.sections[destination.droppableId];
    console.log('start: ', start)
    console.log('finish: ', finish)
    console.log('sections state: ', this.state.sections)
    console.log('source droppaple id: ', source.droppableId)
    console.log('destination droppable id: ', destination.droppableId)
    console.log('draggable id type: ', typeof(draggableId))
    if (start === finish) {
      const newTaskOrder = Array.from(start.taskOrder)
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);

      // console.log('start: ', start)
      const newSection = {
        ...start,
        taskOrder: newTaskOrder,
      };

      // console.log('new section: ', newSection)
      const newState = {
        ...this.state,
        sections: {
          ...this.state.sections,
          [newSection.id]: newSection,
        },
      };

      this.setState(newState, () => {
        this.props.updateSection({
          id: start.id,
          task_order: newTaskOrder
        })
      });
      return;
    }

    const startTaskOrder = Array.from(start.taskOrder);
    startTaskOrder.splice(source.index, 1);
    const newStart = {
      ...start,
      taskOrder: startTaskOrder,
    };

    const finishTaskOrder = Array.from(finish.taskOrder);
    finishTaskOrder.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskOrder: finishTaskOrder,
    };

    const newState = {
      ...this.state,
      sections: {
        ...this.state.sections,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    // this.setState(newState);

    this.setState(newState, () => {
      this.props.updateSection({
        id: start.id,
        task_order: startTaskOrder
      });
      this.props.updateSection({
        id: finish.id,
        task_order: finishTaskOrder
      });
      // this.props.updateTask({
      //   id: draggableId,
      //   section_id: finish.id
      // })
    });
    // console.log('section-index-props: ', this.props)
  };

  render() {
    if (!this.props) return null;
    // console.log('this.props.sectionOrder: ', this.props.sectionOrder)
    // console.log('this.state.sectionOrder: ', this.state.sectionOrder)
    // console.log('section-index-sections: ', this.props.sections)
    // console.log('section-index-sectionOrder: ', this.props.sectionOrder)
    // console.log('section-index props: ', this.props)
    return (
      <div className='section-index-parent'>
        <div className='section-index-content'>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {/* {
              this.props.sections.map((section, index) => (
                <SectionIndexItem 
                  key={section.id} 
                  section={section} 
                  createTask={this.props.createTask} 
                  deleteSection={this.props.deleteSection}
                  updateSection={this.props.updateSection}
                  project={this.props.project}
                  index={index}
                />
              ))
            } */}
            {
              this.props.sectionOrder.map((sectionId, index) => (
                <SectionIndexItem 
                  key={sectionId}
                  section={this.state.sections[sectionId]} 
                  createTask={this.props.createTask} 
                  deleteSection={this.props.deleteSection}
                  updateSection={this.props.updateSection}
                  project={this.props.project}
                  index={index}
                  updateProject={this.props.updateProject}
                />
              ))
            }
          </DragDropContext>
          <div className='new-section-form-container'>
            <div 
              className='new-section-form-toggle show' 
              id={`new-section-toggle-${this.props.projectId}`}
              onClick={this.revealForm}
            >
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
                placeholder='Section title'
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