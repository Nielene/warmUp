import React, { Component } from 'react';
import WarmUp from './WarmUp';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SignUp />
        <WarmUp />
      </div>
    );
  }
}

export default App;

// const rootElement = document.getElementById(
//   "root"
// );
// // ReactDOM.render(<Primaries />, rootElement);
// ReactDOM.render(<WarmUp />, rootElement);
