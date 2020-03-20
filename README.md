# Notsana

Notsana is a fullstack application clone of Asana, a lightweight productivity tool designed for project/task organization. 
An intuitive interface for adding, organizing, and visualizing work to be done minimizes project management overhead. 
[Check out the app here.](https://notsana.herokuapp.com)

## Features
___
#### Create new projects, edit them, and add them to your favorites
![Project creation demo](img/project_create.gif)

#### Implementation:
Project creation and editing functionalities are contained in a multi-purpose modal system to minimize disruption/navigation to new pages.

```
function Modal({modal, closeModal, currentProject}) {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-project':
      component = <NewProjectPageContainer />;
      break;
    case 'edit-project':
      component = <EditProjectFormContainer currentProject={currentProject} />
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};
```
___
#### Add new columns/tasks to a project through a clean, intuitive UI
![Column task creation demo](img/column_task_create.gif)

#### Implementation: 
Column and task creation fields are hidden by default until activated to preserve a cleaner UI. 

Clicking the ```reveal-task-form-button``` element reveals the initially hidden column and task creation input forms. 

Clicking outside of the input field automatically submits the form, obviating the need for cluttering submit buttons.

```
<div onClick={this.revealForm} className='reveal-task-form-button'>
  <svg className='new-task-plus-icon' viewBox='0 0 32 32'>
    <path d="..."></path>
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
```
___
#### Organize/rearrange your project items using drag and drop
![Drag and drop demo](img/drag_and_drop.gif)

#### Implementation: 
Drag and drop is implemented using the [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) library by Atlassian. 

The order of columns/tasks displayed on the page is stored and manipulated in the component's local state for seamless rendering.

```
const start = this.state.sections[source.droppableId];
const finish = this.state.sections[destination.droppableId];

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
```

After a drag and drop action, the new order is set in state and then persisted to the back-end. Rendering is dependent on derived state so visual drag and drop changes are immediate rather than first requiring a response from the server.

```
this.setState(newState, () => {
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
});
```
___

## Technologies
+ React / Redux
+ Ruby on Rails
+ PostgreSQL
+ JavaScript
+ Node.js
+ HTML5 / CSS3
+ Heroku
+ react-beautiful-dnd (Atlassian)

## Future directions
