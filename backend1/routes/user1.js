const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const mySqlConnection = require("../db/db")
let user1

router.get("/register", (req, res) => {
  if (!req.session.user1) {
    res.status(200).render('Register1')
  } else res.status(401).send("Not possible as you are logged in already")
})


router.post("/register", (req, res) => {

    const { name, email, password, password2, phone, address } = req.body;
    
    let errors = [];
    
     
    
    if (!name || !email || !password || !password2 || !phone || !address) {
    
    errors.push({ msg: "Please enter all fields" });
    
    }
    
     
    
    if (password != password2) {
    
    errors.push({ msg: "Passwords do not match" });
    
    }
    
     
    
    if (password.length < 6) {
    
    errors.push({ msg: "Password must be at least 6 characters" });
    
    }
    
    mySqlConnection.query(
    
    "SELECT * FROM user1 WHERE email = ?",
    
    [email],
    
    (err, rows) => {
    
    if (err) res.status(500).send(err);
    
    else if (rows.length) errors.push({ msg: "Email already exists" });
    
    else if (errors.length > 0) {
    
    res.statusCode = 400;
    
    res.send(errors);
    
    } else {
    
    pwdHash = bcrypt.hashSync(password, 10);
    
    var sql = `INSERT INTO user1 (name, email, phone, pwdHash, address) VALUES ?`;
    
    const values = [[name, email, phone, pwdHash, address]];
    
     
    
    mySqlConnection.query(sql, [values], function(err) {
    
    if (err) res.status(500).send(err);
    
    else res.status(200).send("successfully registered");
    
    });
    
    }
    
    }
    
    );
    
    });

    router.post("/login", (req, res) => {
      const { email, password } = req.body
      mySqlConnection.query(
        "SELECT * FROM user1 WHERE email = ?",
        [email],
        (err, rows) => {
          if (err) res.status(500).send(err)
          user1 = rows[0]
          if (user1) {
            const result = bcrypt.compareSync(password, user1.pwdHash)
            if (result) {
              req.session.user1 = user1
              res.status(200).redirect('/home2?login+sucess')
            } else {
              res.status(400).send("pwd incorrect")
            }
          } else {
            res.status(400).send("email doesnot exist")
          }
        },
      )
    })

    router.get("/login", (req, res) => {
      if (!req.session.user1)
        res.status(200).render('login1')
      else res.status(401).send("nope, logout")
    });
    
    router.get("/logout", (req, res) => {
      if (req.session.user1) {
        req.session.destroy(() => {
          res.status(200).redirect('/')
        })
      } else {
        res.status(400).send("you are not logged in")
      }
    })

    router.post("/cart", (req, res) => {
      if (req.session.user1) {
        const {dishname ,dishprice, quantity } = req.body
    
          var sql = `INSERT INTO cart (dishname, dishprice, quantity, customerid) VALUES ?`
          const values = [
            [dishname, dishprice, quantity, req.session.user1.customerid],
          ]
    
          mySqlConnection.query(sql, [values], err => {
            if (err) res.status(500).send(err)
            else
            res.status(200).redirect('back')
          })
      
      } else res.status(401).send("Login to post")
    })
    
    // router.get("/cart", (req, res) => {
    //   if (req.session.user1) {
    //     mySqlConnection.query(
    //       "SELECT * FROM cart WHERE customerid = ?",
    //       [req.session.user1.customerid],
    //       (err, rows) => {
    //         if (err) res.status(500).send(err)
    //         else{
    //         req.session.cart = rows
    //         res.status = 200;
    //         res.render('Menu', {cart : rows})
    //         }
    //       },
    //     )
    //   } else res.status(401).send("login to view")
    // })

    router.get('/cart', (req, res) => {
      if (req.session.user1)
      {
        mySqlConnection.query(
          "SELECT * FROM user1 WHERE customerid = ?",[req.session.user1.customerid],
          (err, rows) => 
          {
            if (err) res.status(500).send(err)
            else
            {
              mySqlConnection.query(
                "SELECT * FROM cart WHERE customerid = ?",[req.session.user1.customerid],
                (err, rows) => 
                {
                  if (err) res.status(500).send(err)
                  else
                  {
                  res.status = 200;
                  res.render('cart', {cart : rows , user1 : req.session.user1})
                  }
                },)
              }
            },)
          }
          else res.status(401).send("login to view")
        })


module.exports = router 