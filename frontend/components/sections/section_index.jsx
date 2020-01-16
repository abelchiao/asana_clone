import React from 'react';
import SectionIndexItem from './section_index_item';
import { withRouter } from 'react-router-dom';

class SectionIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    // debugger
    this.props.fetchSections(this.props.match.params.projectId)
  }

  render() {
    if (!this.props) return null;
    return (
      <div>
        Project id: {this.props.match.params.projectId}
        <br/>
        SectionIndex
        <br/>
        <SectionIndexItem />
        {
          Object.values(this.props.sections).map(section => (
            <SectionIndexItem key={section.id} section={section} />
          ))
        }
      </div>
    );
  };
};

export default withRouter(SectionIndex);