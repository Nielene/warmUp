const express = require('express');
const axios = require('axios');
const router = express.Router();

//===== using middleware =======

const getAllMovies = async(req, res, next) => {
  let response = await axios.get("https://ghibliapi.herokuapp.com/films")
  res.movies = response.data;
  next();
}

const getSpecificMovie = async(req, res, next) => {
  let response = await axios.get('https://ghibliapi.herokuapp.com/films/' + req.params.id)
  res.movie = response.data;
  next();
}

router.get('/', getAllMovies, (req, res) => {
  res.json(res.movies)
})

router.get('/:id', getSpecificMovie, (req, res) => {
  res.json(res.movie)
})

module.exports = router;

//======= without middleware:==========
// router.get('/', (req, res) => {
//   axios.get('https://ghibliapi.herokuapp.com/films')
//   .then (response => {
//     res.json(response.data)
//   })
// })
//
// router.get('/:id', (req, res) => {
//   axios.get('https://ghibliapi.herokuapp.com/films/' + req.params.id)
//   .then(response => {
//     console.log(response);
//     res.json(response.data)
//   })
// })
// // http://localhost:3000/movies/2baf70d1-42bb-4437-b551-e5fed5a87abe
// module.exports = router;
//=============================
