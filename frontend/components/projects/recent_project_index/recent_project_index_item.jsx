import React from 'react';
import { Link } from 'react-router-dom';

const RecentProjectIndexItem = ({ project }) => (
  <li>
    <Link to={`/projects/${project.id}`}>
      <div className='project-icon'>
        <img className='list-icon' src={window.listIcon} />
      </div>
      <div>{project.title}</div>
    </Link>
  </li>
);

export default RecentProjectIndexItem;