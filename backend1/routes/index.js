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
router.get('/home2', (req, res) => {
    if (req.session.user1)
    {
      mySqlConnection.query(
        "SELECT * FROM user1 ",
        (err, rows) => 
        {
          if (err) res.status(500).send(err)
          else
          {
            mySqlConnection.query(
              "SELECT * FROM user2 ",
              (err, rows) => 
              {
                if (err) res.status(500).send(err)
                else
                {
                res.status = 200;
                res.render('home2', {user2 : rows , user1 : req.session.user1})
                }
              },)
            }
          },)
        }
      
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

  router.get('/home2/restaurant:restaurantid', (req, res) => {
    if (req.session.user1)
    {
      mySqlConnection.query(
        "SELECT * FROM user1 ",
        (err, rows) => 
        {
          if (err) res.status(500).send(err)
          else
          {
            mySqlConnection.query(
              "SELECT * FROM user2 ",
              (err, rows) => 
              {
                if (err) res.status(500).send(err)
                else
                {
                  mySqlConnection.query(
                    "SELECT * FROM Menu WHERE restaurantid = ? ",[req.params.restaurantid],
                    (err, rows) => 
                    {
                      if (err) res.status(500).send(err)
                      else
                      {
                      res.status = 200;
                      res.render('restaurant', {user2 : rows , user1 : req.session.user1, Menu : rows })
                      }
                    },)
                }
              },)
            }
          },)
        }
      
    else
      res.status(401).send('login for this');
  });
  router.get('/restaurant:restaurantid', (req, res) => {
    
            mySqlConnection.query(
              "SELECT * FROM user2 ",
              (err, rows) => 
              {
                if (err) res.status(500).send(err)
                else
                {
                  mySqlConnection.query(
                    "SELECT * FROM Menu WHERE restaurantid = ? ",[req.params.restaurantid],
                    (err, rows) => 
                    {
                      if (err) res.status(500).send(err)
                      else
                      {
                      res.status = 200;
                      res.render('restaurant', {user2 : rows , user1 : req.session.user1, Menu : rows })
                      }
                    },)
                }
              },)});
            
        
    
    


module.exports = router