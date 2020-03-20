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

___
#### Organize/rearrange your project items using drag and drop
![Drag and drop demo](img/drag_and_drop.gif)

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
