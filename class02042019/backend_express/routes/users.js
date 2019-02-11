let express = require('express');
let router = express.Router();
const { getAllUsers, getAllPhotosForOneUser,createNewUser } = require('../db/queries/userQueries.js')


router.get('/', getAllUsers );
router.get('/:id/photos', getAllPhotosForOneUser );
router.post('/', createNewUser );


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
