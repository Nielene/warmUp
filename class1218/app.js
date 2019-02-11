let express = require('express');
let app = express();
let bp = require('body-parser');
let students = require('./routes/students');

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.use('/students', students);

app.get('*', (req, res) => {
  res.send('error');
})

app.listen(3000, () => {
  console.log('Listening of port 3000.');
});
