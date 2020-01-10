import React from 'react';
import SideBarContainer from '../../side_bar/side_bar_container';
import NavBarContainer from '../../nav_bar/nav_bar_container';

class NewProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      owner_id: this.props.ownerId,
      team_id: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const project = this.state
    this.props.createProject(project);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  render() {
    return (
      <div>
        {/* <SideBarContainer />
        <NavBarContainer /> */}
        <h1>Add project details</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Project name
            <input 
              type="text"
              onChange={this.update('title')}
            />
          </label>
          <br/>
          <label>Description
            <textarea
              onChange={this.update('description')}
            />
          </label>
          <br/>
          <input type='submit' value='Create Project'/>
        </form>
      </div>
    )
  };
};

export default NewProjectPage;