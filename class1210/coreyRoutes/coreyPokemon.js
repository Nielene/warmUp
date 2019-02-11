const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then(response => {
    res.json(response.data.results)
  })
  // res.send("all pokemon")
})

router.get('/:id', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/' + req.params.id)
  .then (response => {
    // console.log(response.data);
    res.json(response.data)
  })
})


module.exports = router;
