import React from 'react';
import SectionIndexItem from './section_index_item';
import { withRouter } from 'react-router-dom';

class SectionIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  // componentDidMount() {
  //   this.props.fetchSections(this.props.match.params.projectId)
  // }

  render() {
    // debugger
    // if (!this.props) return null;
    return (
      <div className='section-index-parent'>
        <div className='section-index-header'>
          Project id: {this.props.match.params.projectId}
          SectionIndex
        </div>
        <div className='section-index-content'>
          {
            (this.props.sections).map(section => (
              <SectionIndexItem key={section.id} section={section} />
            ))
          }
        </div>
      </div>
    );
  };
};

export default withRouter(SectionIndex);