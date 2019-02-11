import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import { DisplayPokemon } from './DisplayPokemon'

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPokemon: {},
      error: false,
    }
  }

  updateError = (boolean) => {
    this.setState({error: boolean})
  }

  setPokemon = ( pokemon ) => {
    this.setState({displayPokemon: pokemon})
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Form setPokemon={this.setPokemon} updateError={this.updateError}/>
        {!this.state.error ?
          <DisplayPokemon abilities={this.state.displayPokemon.abilities}
            base_experience= {this.state.displayPokemon.base_experience} />
          : 'Not Found'
        }
      </div>
    );
  }
}

export default App;


// {this.state.displayPokemon.abilities ?
//   <DisplayPokemon abilities={this.state.displayPokemon.abilities} base_experience= {this.state.displayPokemon.base_experience} />
  // : null}
