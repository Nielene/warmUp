import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom'

import {PokemonList} from './pokemon/PokemonList'

class App1 extends Component {
  constructor() {
    super() ;
    this.state = {
      loading: true,
      pokemon: [],
      showing: false,
    }
    this.toggleShowing = this.toggleShowing.bind(this)
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({pokemon: res.data.results })
      console.log(this.state.pokemon);
    })
  }

  toggleShowing() {
    // if (this.state.showing) {
      this.setState({showing: !this.state.showing})
    // } else {
      // this.setState({showing: true})
    // }
  }

  render() {
    // if (this.state.loading) {
    //   return <>Loading!!!</>
    // }

    return (
      <div className="App">
        <button onClick={this.toggleShowing}>{this.state.showing ? 'Hide Pokemon' : 'Show Pokemon'}</button>
        {this.state.showing ? <PokemonList pokemon={this.state.pokemon} /> : null }
    </div>
    );
  }
}

// export default App1;
