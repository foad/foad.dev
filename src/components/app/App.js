import React, { Component } from 'react';
import './app.scss';

import HomeContainer from '../../containers/home/home-container';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
