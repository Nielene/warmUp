import React, { Component } from 'react';
import './App.css';
import { Pokemon } from './pokemon/Pokemon';
import { Home } from './Home';
import { About } from './About';
import { NavBar } from './NavBar';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemon: [],
      showing: false
    }
    this.toggleShowing = this.toggleShowing.bind(this);
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      this.setState({ pokemon: res.data.results, loading: false })
    })
  }

  toggleShowing() {
      this.setState({ showing: !this.state.showing })
  }

  render() {
    if(this.state.loading) {
      return <>LOADING!!!!</>
    }
    return (

      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/pokemon/" render={(props) => <Pokemon {...props} showing={this.state.showing}
          toggleShowing={this.toggleShowing} pokemon={this.state.pokemon} />} />
          <Route  path="/*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);



//======================

// import React, { Component } from 'react';
// import './App.css';
// import {Pokemon } from './pokemon/Pokemon';
// import {Home} from './Home';
// import {About} from './About';
// import {NavBar} from './NavBar';
// import axios from 'axios';
// import {Route, Switch} from 'react-router-dom'
// import { withRouter } from 'react-router'
//
//
// class App extends Component {
//   constructor(props) {
//     super(props) ;
//     this.state = {
//       loading: true,
//       pokemon: [],
//       showing: false,
//     }
//     this.toggleShowing = this.toggleShowing.bind(this)
//   }
//
//   componentDidMount() {
//     axios.get('https://pokeapi.co/api/v2/pokemon/')
//     .then(res => {
//       this.setState({pokemon: res.data.results, loading: false })
//       console.log(this.state.pokemon);
//     })
//   }
//
//   toggleShowing() {
//       this.setState({showing: !this.state.showing})
//
//   }
//
//   render() {
//     // debugger
//
//     if (this.state.loading) {
//       return <>Loading!!!</>
//     }
//
//     return (
//       <div className="App">
//         <NavBar />
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route path='/about' component={About} />
//           <Route exact path='/pokemon/:id'
//             render={(props) => <Pokemon {...props} showing={this.state.showing}
//               toggleShowing={this.toggleShowing} pokemon={ this.state.pokemon} />} />
//           <Route path='/*' component={Home} />
//         </Switch>
//       </div>
//     );
//   }
// }
//
// export default withRouter(App);



//======================
// // <Route component= {NavBar} />
