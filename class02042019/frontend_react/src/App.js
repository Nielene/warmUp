import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: [],
  }

  componentDidMount () {
    // axios.get('/users')
    // .then(res => {
    //   debugger
    // })

    // axios.post('/users', {username: 'reed', email: 'bigGains@hotmail.lrc'})
    // .then(res => {
    //   debugger
    // })

    axios.get('/users')
    .then(res => {
      debugger
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hello
        </h1>
      </div>
    );
  }
}

export default App;
