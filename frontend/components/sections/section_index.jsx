import React from 'react';
// import SectionIndexItem from './section_index_item';
import SectionIndexItemContainer from './section_index_item_container';
import { withRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

class SectionIndex extends React.Component {
  constructor(props) {
    super(props)
    let sections = this.props.sections ? this.props.sections : {};

    this.state = {
      title: '',
      project_id: this.props.match.params.projectId,
      project: this.props.project,
      // sections: sections,
      sections: sections,
      // sectionOrder: this.props.sectionOrder

      // Testing
      sectionOrder: this.props.project.sectionOrder
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  };

  componentDidMount() {
    this.props.fetchSections(this.props.match.params.projectId).then(result => {
      this.setState({
        sections: result.sections
      })
      // console.log('section-index CDM, sections state: ', this.state.sections)
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.projectId !== this.props.match.params.projectId) {
      this.setState({ 
        title: '',
        project_id: this.props.match.params.projectId,
        sectionOrder: this.props.sectionOrder
      });
      // this.props.fetchProject(this.props.match.params.projectId)
    };
    
    // Removing this fixes the task "sticking" issue
    // Adding this makes newly created sections show up but causes sticking 
    // Sticking likely caused by grabbing sections from props and passing 
    // to children
    // if (prevProps.sections !== this.props.sections) {
    //   this.setState({
    //     sections: this.props.sections
    //   })
    // }

    if (Object.keys(prevProps.sections).length !== Object.keys(this.props.sections).length) {
      this.setState({
        sections: this.props.sections
      })
    }

    Object.keys(this.props.sections).forEach(sectionId => {
      // debugger
      // console.log('SECTION ID: ', sectionId)
      // console.log('this.props taskOrder: ', this.props.sections[sectionId])
      // console.log('prevProps taskOrder: ', prevProps.sections[sectionId])
      if (!prevProps.sections[sectionId]) return;

      if (this.props.sections[sectionId].taskOrder.length !== 
        prevProps.sections[sectionId].taskOrder.length) {
          console.log('need to update state in section-index')
          this.setState({
            ...this.state,
            sections: {
              ...this.state.sections,
              [sectionId]: this.props.sections[sectionId]
            }
          })
      }

      if (this.props.sections[sectionId].title !== 
        prevProps.sections[sectionId].title) {
          console.log('need to update state in section-index')
          this.setState({
            ...this.state,
            sections: {
              ...this.state.sections,
              [sectionId]: this.props.sections[sectionId]
            }
          })
      }
    })

    // Object.values(this.props.sections).forEach(section => {
    //   if (section.taskOrder !== prevProps.sections[section.id].taskOrder) {
    //     this.setState({
    //       sections: {
    //         [section.id]: section,
    //       }
    //     })
    //   }
    // })
    // if (prevProps.project !== this.props.project) {
    //   this.setState({
    //     sectionOrder: this.props.project.sectionOrder
    //   })
    // }

    // if (prevProps.tasks !== this.props.tasks) {
    //   this.setState({
    //     sections: this.props.sections,
    //   })
    // }

    // if (prevProps.sections !== this.props.sections) {
    //   // this.props.fetchSections(this.props.match.params.projectId)
    //   this.props.fetchProject(this.props.match.params.projectId)
    // }

    // if (prevProps.sections !== this.props.sections) {
    //   this.setState({
    //     sectionOrder: this.props.project.sectionOrder
    //   })
    // }

    // if (prevProps.sectionOrder !== this.props.sectionOrder) {
    //   this.setState({
    //     sectionOrder: this.props.sectionOrder
    //   })
    // }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    let updatedSectionOrder = this.state.sectionOrder
    // this.props.createSection(this.state)
    this.props.createSection({
      title: this.state.title,
      project_id: this.state.project_id,
      // task_order: []
    })
      .then(data => {
        // const newSectionId = data.section.id
        updatedSectionOrder.push(data.section.id)

        // testing
        // const newSection = data.section;
        // // newSection.taskOrder = newSection.task_order
        // newSection.taskOrder = []
        // console.log('new section: ', newSection)
        // console.log('SECTION CREATION DATA: ', data)

        this.setState({ 
          sectionOrder: updatedSectionOrder,
          sections: {
            ...this.state.sections,
            [data.section.id]: data.section
            // [data.section.id]: newSection
          }
        }, () => {
          this.props.updateProject({
            id: this.props.project.id,
            section_order: updatedSectionOrder
          })
        console.log('updated section order: ', updatedSectionOrder)
        console.log('section-index after submitting :', this.state)
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
    finishTaskOrder.splice(destination.index, 0, parseInt(draggableId));
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

    this.setState(newState, () => console.log('new state', this.state));
    this.props.updateSection({
      id: start.id,
      task_order: startTaskOrder
    });
    this.props.updateSection({
      id: finish.id,
      task_order: finishTaskOrder
    });
    this.props.updateTask({
      id: draggableId,
      section_id: finish.id
    })

    console.log('new start')
    console.log(JSON.stringify(newStart))
    // console.log(JSON.stringify(this.state.sections[newStart.id].taskOrder))
    console.log('new finish')
    console.log(JSON.stringify(newFinish))
    // console.log(JSON.stringify(this.state.sections[newFinish.id].taskOrder))

    // this.setState(newState, () => {
    //   this.props.updateSection({
    //     id: start.id,
    //     task_order: startTaskOrder
    //   });
    //   this.props.updateSection({
    //     id: finish.id,
    //     task_order: finishTaskOrder
    //   });
    //   this.props.updateTask({
    //     id: draggableId,
    //     section_id: finish.id
    //   })
    // });
  };

  render() {
    if (!this.props) return null;
    if (!this.props.sections) return null;
    // console.log('this.props.sectionOrder: ', this.props.sectionOrder)
    // console.log('this.state.sectionOrder: ', this.state.sectionOrder)
    // console.log('section-index-sections: ', this.props.sections)
    // console.log('section-index-sectionOrder: ', this.props.sectionOrder)
    // console.log('section-index props: ', this.props)

    // console log for debugging why new sections weren't showing up in newly created sections
    console.log('section index render state: ', JSON.stringify(this.state.sections))
    
    return (
      <div className='section-index-parent'>
        <div className='section-index-content'>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {
              this.state.sectionOrder.map((sectionId, index) => (
                <SectionIndexItemContainer 
                  key={sectionId}
                  sectionId={sectionId}
                  // keying into this.state.sections results in draggables getting "stuck" after drop
                  section={this.state.sections[sectionId]}
                  // section={this.props.sections[sectionId]}

                  // testing
                  // taskOrder={this.state.sections[sectionId].taskOrder}

                  createTask={this.props.createTask} 
                  // deleteSection={this.props.deleteSection}
                  // updateSection={this.props.updateSection}
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