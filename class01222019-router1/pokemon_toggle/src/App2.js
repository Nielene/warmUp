import React, { Component } from 'react';
import './App.css';
import {Pokemon } from './pokemon/Pokemon';
import {Home} from './Home';
import {About} from './About';
import {NavBar} from './NavBar';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom'

// import { withRouter } from 'react-router'

import {PokemonList} from './pokemon/PokemonList'

class App2 extends Component {
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
      this.setState({showing: !this.state.showing})

  }

  render() {
    // if (this.state.loading) {
    //   return <>Loading!!!</>
    // }

    return (
      <div className="App">
        <Route component= {NavBar} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pokemon' render={(props) => <Pokemon {...props} showing={this.state.showing} toggleShowing={this.toggleShowing} pokemon={ this.state.pokemon} />} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

// export default App2;
