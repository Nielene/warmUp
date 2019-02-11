const express = require('express');
const axios = require('axios');
const router = express.Router()

// const middleware = (req, res, next) => {
//
// }
axios('https://pokeapi.co/api/v2/pokemon/')
.then(res => {
  // console.log("from here",res.data.results);
  res.data.results.forEach(obj => console.log(obj.name));
  // res.json(res.data.results);
})
.then(res => {

  router.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', "/*");
    res.json({
      pokemonNames: res.data.results
    })
  })

})



module.exports = router;
