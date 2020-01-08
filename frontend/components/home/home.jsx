import React from 'react';
import UtilBarContainer from '../util_bar/util_bar_container';

class Home extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <div>Home</div>
        <UtilBarContainer />
      </div>
    );
  };
};

export default Home;