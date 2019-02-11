import React, { Component } from 'react';
import './App.css';
import WarmUp from './WarmUp';
import Profile from './Profile';

  // <WarmUp />
class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
