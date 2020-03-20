const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('home-page'));
router.get('/dashboard1', (req, res) => {
    if (req.session.user1)
      res.status(200).send(req.session.user1)
    else
      res.status(401).send('login for this');
  });
  router.get('/dashboard2', (req, res) => {
    if (req.session.user2)
      res.status(200).send(req.session.user2)
    else
      res.status(401).send('login for this');
  });


module.exports = router