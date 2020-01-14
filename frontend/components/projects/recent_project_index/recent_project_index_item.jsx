import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RecentProjectIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.revealProjectTileDropdown = this.revealProjectTileDropdown.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  revealProjectTileDropdown(e) {
    e.stopPropagation();
    document.getElementById(`project-tile-${this.props.project.id}`).classList.toggle('show');
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteProject(this.props.project.id);
  }

  navigateToShow() {
    this.props.history.push(`/projects/${this.props.project.id}`)
  }

  render() {
    const { project } = this.props;
    // debugger;
    return (
      <div className='project-tile-parent'>
        <div onClick={this.navigateToShow} className='project-tile' to={`/projects/${project.id}`}>
          <div className='project-icon'>
              <svg onClick={this.revealProjectTileDropdown} className='project-tile-menu-icon' viewBox='0 0 32 32'>
                <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
              </svg>
              <div
                id={`project-tile-${project.id}`}
                className='project-tile-dropdown-contents'
              >
                <div onClick={this.handleDelete} className='project-tile-dropdown-item'>
                  Delete Project
                </div>
              </div>
            <img className='list-icon' src={window.listIcon} />
          </div>
          <div className='tile-project-title'>{project.title}</div>
        </div>
      </div>
    )
  }
};


export default withRouter(RecentProjectIndexItem);