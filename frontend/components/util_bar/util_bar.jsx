import React from 'react';

class UtilBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const sessionLinks = () => (
      <button></button>
    );

    // const utilBar = () => (

    // );

    return (
      <div>
        <h1>Not-sana</h1>
        {display}
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default UtilBar;
