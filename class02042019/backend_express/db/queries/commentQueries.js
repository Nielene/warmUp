const { db } = require('../index.js');

const getAllComments = (req, res, next) => {
  db.any(
    'SELECT * FROM comments'
  )
  .then(comments => {
    res.status(200).json({
      status: 'success',
      comments: comments,
      message: 'All Comments Received!'
    })
  })
  .catch(err => next(err));
}

const createComment = (req, res, next) => {
  db.none(
    "INSERT INTO comments(body, user_id, photo_id) VALUES(${body}, ${user_id}, ${photo_id})", req.body
  )
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Made new Comment!'
    })
  })
  .catch(err => next(err));
}
//test with a user_id and a photo_id that ALREADY esist.

module.exports = { getAllComments, createComment }
