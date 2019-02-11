const { db } = require('../index.js');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: 'Received all USERS!'
    })
  })
  .catch(err => next(err));
}

const createNewUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(username, email) VALUES(${username}, ${email})",
    req.body
  )
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'NEW USER ADDED!'
    })
  })
  .catch(err => next(err));
}

const getAllPhotosForOneUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT * FROM photos WHERE user_id =$1", [userId]
  )
  .then(photos => {
    res.status(200).json({
      status: 'success',
      photos: photos,
      message: 'All USER PHOTOS!'
    })
  })
  .catch(err => next(err));
}

module.exports = { getAllUsers, createNewUser, getAllPhotosForOneUser }
