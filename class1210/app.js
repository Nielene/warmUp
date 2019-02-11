const express = require('express');
const axios = require('axios')

const pokemon = require('./routes/pokemon');
const movies = require('./routes/movies');

const app = express();

app.use('/pokemon', pokemon);
app.use('/movies', movies);

app.get('/', (req, res) => {
  res.send("This is the home page")
})

app.get('/*', (req, res) => {
  res.send("404 NOT FOUND")
})

app.listen(3300, () => {
  console.log("Port 3300");
})
