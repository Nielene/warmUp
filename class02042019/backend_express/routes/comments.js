let express = require('express');
let router = express.Router();
const { getAllComments, createComment } = require('../db/queries/commentQueries.js')


router.get('/', getAllComments );
router.post('/', createComment );

module.exports = router;
