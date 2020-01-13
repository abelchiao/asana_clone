import React from 'react';
import { Link } from 'react-router-dom';

const RecentProjectIndexItem = ({ project }) => (
  <li>
    <Link to={`/projects/${project.id}`}>
      <img className='list-icon' src={window.listIcon} />
      <div>{project.title}</div>
    </Link>
  </li>
);

export default RecentProjectIndexItem;