import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FavoriteProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.revealProjectTileDropdown = this.revealProjectTileDropdown.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCreateFavorite = this.handleCreateFavorite.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
  }

  revealProjectTileDropdown(e) {
    e.stopPropagation();
    const dropdownIcon = document.getElementById(`favorite-tile-${this.props.project.id}`);
    dropdownIcon.classList.toggle('show');

    window.onclick = () => {
      let dropdowns = document.getElementsByClassName('favorite-tile-dropdown-contents');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    // window.onclick = event => {
    //   if (!event.target.matches(`#project-tile-${this.props.project.id}`)) {
    //     let dropdowns = document.getElementsByClassName('project-tile-dropdown-contents');
    //     for (let i = 0; i < dropdowns.length; i++) {
    //       let openDropdown = dropdowns[i];
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //   }
    // }
  };

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteProject(this.props.project.id);
    let dropdowns = document.getElementsByClassName('favorite-tile-dropdown-contents');
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
    let dropdowns = document.getElementsByClassName('favorite-tile-dropdown-contents');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  navigateToShow() {
    this.props.history.push(`/projects/${this.props.project.id}`)
  }

  handleCreateFavorite(e) {
    e.stopPropagation();
    this.props.createFavorite({
      user_id: this.props.currentUser.id,
      project_id: this.props.project.id
    })
    let dropdowns = document.getElementsByClassName('favorite-tile-dropdown-contents');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  handleRemoveFavorite(e) {
    e.stopPropagation();
    this.props.removeFavorite(this.props.project.favoriteId)
    let dropdowns = document.getElementsByClassName('favorite-tile-dropdown-contents');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  renderFavoriteIcon() {
    if (this.props.project.favoriteId) {
      return (
        <div
          className='tile-solid-star-container'
          onClick={this.handleRemoveFavorite}
        >
          <svg className='tile-solid-star' viewBox='0 0 32 32'>
            <path d="M8.2,30.1c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30.1,8.2,30.1z"></path>          </svg>
        </div>
      )
    } else {
      return (
        <div
          className='tile-empty-star-container'
          onClick={this.handleCreateFavorite}
        >
          <svg className='tile-empty-star' viewBox='0 0 32 32'>
            <path d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z"></path>
          </svg>
        </div>
      )
    }
  }

  render() {
    const { project } = this.props;

    return (
      <div className='project-tile-parent'>
        <div onClick={this.navigateToShow} className='project-tile' to={`/projects/${project.id}`}>
          <div className='project-icon'>
            <div className='project-icon-top'>
              {this.renderFavoriteIcon()}
              <div>
                <svg onClick={this.revealProjectTileDropdown} className='project-tile-menu-icon' viewBox='0 0 32 32'>
                  <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
                </svg>
                <div
                  id={`favorite-tile-${project.id}`}
                  className='favorite-tile-dropdown-contents'
                >
                  <div onClick={this.handleEdit} className='project-tile-dropdown-item'>
                    Edit project details
                  </div>
                  <div onClick={this.handleDelete} className='project-tile-dropdown-item'>
                    Delete project
                  </div>
                </div>
              </div>
            </div>
            <img className='list-icon' src={window.listIcon} />
            <div className='user-icon-placeholder'></div>
          </div>
          <div className='tile-project-title'>{project.title}</div>
        </div>
      </div>
    )
  }
};


export default withRouter(FavoriteProjectIndexItem);