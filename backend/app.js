
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'seCReT',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}));

app.use('/', require('./routes/index.js'));

app.use('/user1', require('./routes/user1.js'));
app.use('/user2', require('./routes/user2.js'));

app.get('*', (req, res) => {
  res.status(404).send('You did something wrong!');
});
// app.get('*', (req, res) => {
//     console.log(req.session);
//   });
const PORT = 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

