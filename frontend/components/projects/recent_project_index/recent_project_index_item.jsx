import React from 'react';
import { Link } from 'react-router-dom';

const RecentProjectIndexItem = ({ project }) => (
  <div className='project-tile-parent'>
    <Link className='project-tile' to={`/projects/${project.id}`}>
      <div className='project-icon'>
        <img className='list-icon' src={window.listIcon} />
      </div>
      <div className='tile-project-title'>{project.title}</div>
    </Link>
  </div>
);

export default RecentProjectIndexItem;