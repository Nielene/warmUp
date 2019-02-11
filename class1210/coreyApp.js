const express = require('express');
const pokemon = require('./coreyRoutes/coreyPokemon')
const movies = require('./coreyRoutes/coreyMovies.js')
const app = express();
const port = 3000;

app.use('/pokemon', pokemon);
app.use('/movies', movies)

app.get('/', (req, res) => {
  res.send("This is the Homepage.")
})

app.get('/*', (req, res) => {
  res.status(404).send("NOT FOUND 404")
})
// res.status(404) - a header. vs a plain positive return (regardless of logged message)

app.listen(port, ()=> {
  console.log("listening to port:", port);
})
