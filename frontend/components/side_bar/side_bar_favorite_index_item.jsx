import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class SideBarFavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  navigateToShow() {
    this.props.history.push(`/projects/${this.props.project.id}`)
  }

  render() {
    if (!this.props) return null;
    const { project } = this.props

    return (
      <div onClick={this.navigateToShow} className='side-bar-project-index-item'>
        <svg className='side-bar-project-color-icon' viewBox='0 0 24 24'>
          <path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9s0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9s-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9c-0.4-1-0.6-1.8-0.6-4v-3.2c0-2.2,0.2-3,0.7-3.9C5.1,5.7,5.8,5,6.6,4.6C7.4,4.2,8.2,4,10.4,4z"></path>
        </svg>
        <div to={`/projects/${project.id}`} className='side-bar-project-name'>
          {project.title}
        </div>
        {/* <div>{this.props.project.title}</div> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

// export default connect(mapStateToProps, mapDispatchToProps)(SideBarFavoriteIndexItem);
export default withRouter(SideBarFavoriteIndexItem);