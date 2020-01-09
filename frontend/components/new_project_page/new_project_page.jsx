import React from 'react';
import SideBarContainer from '../side_bar/side_bar_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class NewProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      title: '',
      description: '',
      ownerId: this.props.ownerId

    })
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
        <form>
          <label>Project name
            <input 
              type="text"
              onChange={this.update('title')}
            />
          </label>
        </form>

      </div>
    )
  };
};

export default NewProjectPage;