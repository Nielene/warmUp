// let express = require('express');
let router = express.Router();
const db = require('../db/queries');

router.get('/', db.getAllStudents);
router.post('/', db.addingSingleStudent)

module.exports = router;
