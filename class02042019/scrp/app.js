let express = require('express');
let app = express();
let users = require('./routes/users')
let photos = require('./routes/photos')
let comments = require('./routes/comments');

app.use('/users', users)

app.get('/', (req, res) => {
  res.send('home')
})

app.get('*', (req, res) => {
  res.send('catchall')
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})
