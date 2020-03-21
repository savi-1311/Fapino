const express = require('express');
const router = express.Router();
const mySqlConnection = require("../db/db")

router.get('/', (req, res) => 
{
  mySqlConnection.query(
    "SELECT * FROM user2 ",
    (err, rows) => {
      if (err) res.status(500).send(err)
      else
      {
        res.status = 200;
      res.render('home1', {user2 : rows})
      }
    },)
});
router.get('/dashboard1', (req, res) => {
    if (req.session.user1)
      res.status(200).send(req.session.user1)
    else
      res.status(401).send('login for this');
  });
  router.get('/dashboard2', (req, res) => {
    if (req.session.user2)
      {
        res.render('dashboard2', {
          user2: req.session.user2,
        })
      }
    else
      res.status(401).send('login for this');
  });


module.exports = router