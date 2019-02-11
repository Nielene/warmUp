import React from 'react';
import { MovieDisplay } from './MovieDisplay';

class MovieIndex extends React.Component {
  constructor () {
    super();
    this.state = {
      movies: []
    }
    // debugger
  }

  handleClick = () => {
    // debugger
    fetch('https://ghibliapi.herokuapp.com/films')
    .then (response => {
      // debugger
      return response.json()
    })
    .then(res => {
      // debugger
      this.setState({ movies: res })
    })
  }

  render() {
    // debugger
    let movies = this.state.movies.map(movie => {
      return (
        < MovieDisplay
        title={movie.title}
        description={movie.description}/>
      )
    })

    return (
      <div>
        <button onClick={this.handleClick}>Click for Movies!</button>
        {movies}
      </div>
    )
  }
}


export default MovieIndex;
