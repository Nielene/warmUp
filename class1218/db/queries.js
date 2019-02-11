const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/hogwarts');

const getAllStudents = (req, res, next) => {
  db.any('SELECT * FROM students').then(students => {
    res.status(200)
      .json({
        message: 'success!',
        students: students
      })
  }).catch((err) => {
    console.log(err);
    next(); //i dont have anything else for function to do. go let it hit the error handler now. (or deal with error handling in the front end.) //to app.js
  })
}

const addingSingleStudent = (req, res, next) => {
  //req.body == {name: 'Hermione', house: 'Griffindor'}
  db.none(
    "INSERT INTO students(name, house) VALUES (${name}, ${house})",
    req.body
  ).then (() => {
    res.status(200).json({
      message: "success!"
    });
  }).catch((err) => {
    console.log(err);
    next();
  })
}

module.exports = { getAllStudents, addingSingleStudent };
