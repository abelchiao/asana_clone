import React from 'react';
import TaskIndexContainer from '../tasks/task_index_container';

class SectionIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props.section) return null
    const { section } = this.props;
    return (
      <div className='section-index-item-parent'>
        SectionIndexItem
        <br/>
        section: {section.title}
        <TaskIndexContainer sectionId={section.id} />
      </div>
    )
  }
}

export default SectionIndexItem;