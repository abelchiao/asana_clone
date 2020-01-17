import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBarProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.revealProjectDropdown = this.revealProjectDropdown.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  };

  navigateToShow() {
    this.props.history.push(`/projects/${this.props.project.id}`)
  }

  revealProjectDropdown(e) {
    e.stopPropagation();
    const dropdown = document.getElementById(`side-bar-project-${this.props.project.id}`);
    dropdown.classList.toggle('show');

    window.onclick = () => {
      let dropdowns = document.getElementsByClassName('side-bar-project-dropdown-contents');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteProject(this.props.project.id);
    let dropdowns = document.getElementsByClassName('side-bar-project-dropdown-contents');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  handleEdit(e) {
    e.stopPropagation();
    this.props.openModal('edit-project', this.props.project.id);
    let dropdowns = document.getElementsByClassName('side-bar-project-dropdown-contents');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  render() {
    if (!this.props) return null;
    const { project } = this.props;
    return (
      <div onClick={this.navigateToShow} className='side-bar-project-index-item'>
        <svg className='side-bar-project-color-icon' viewBox='0 0 24 24'>
          <path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9s0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9s-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9c-0.4-1-0.6-1.8-0.6-4v-3.2c0-2.2,0.2-3,0.7-3.9C5.1,5.7,5.8,5,6.6,4.6C7.4,4.2,8.2,4,10.4,4z"></path>
        </svg>
        <div to={`/projects/${project.id}`} className='side-bar-project-name'>
          {project.title}
        </div>
        <div className='side-bar-dropdown-container'>
          <svg onClick={this.revealProjectDropdown} className='side-bar-project-dropdown-icon' viewBox='0 0 32 32'>
            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
          </svg>
          <div
            id={`side-bar-project-${project.id}`}
            className='side-bar-project-dropdown-contents'
          >
            <div onClick={this.handleEdit} className='side-bar-project-dropdown-item'>
              Edit project details
            </div>
            <div onClick={this.handleDelete} className='side-bar-project-dropdown-item'>
              Delete project
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(SideBarProjectIndexItem);