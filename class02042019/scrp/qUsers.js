// const { db } = require('./index.js');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users').then(users => {
    res.status(200)
    res.json({
      status: 'success',
      message: 'Got all Users',
      body: animals
    })
  }).catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: "You didn't get your Users!"
    })
    console.log(err);
    next();
  })
}

const createNewUser = (req, res, next) => {
  db.none(
    'INSERT INTO users(user_id, name) VALUES(${newUsersId})', {
      newUserId: req.body.user_id,
      newName: req.body.name
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New User ADDED.'
    })
  })
}
