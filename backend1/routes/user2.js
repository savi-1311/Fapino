const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const mySqlConnection = require("../db/db")

let user2

router.get("/register", (req, res) => {
  if (!req.session.user2) {
    res.status(200).render('Register2')
  } else res.status(401).send("Not possible as you are logged in already")
})

router.get("/login", (req, res) => {
  if (!req.session.user2)
    res.status(200).render('login2')
  else res.status(401).send("nope, logout")
});
router.post("/register", (req, res) => {

    const { resname, email, password, password2, phone, address } = req.body;
    
    let errors = [];
    
     
    
    if (!resname || !email || !password || !password2 || !phone || !address) {
    
    errors.push({ msg: "Please enter all fields" });
    
    }
    
     
    
    if (password != password2) {
    
    errors.push({ msg: "Passwords do not match" });
    
    }
    
     
    
    if (password.length < 6) {
    
    errors.push({ msg: "Password must be at least 6 characters" });
    
    }
    
    mySqlConnection.query(
    
    "SELECT * FROM user2 WHERE email = ?",
    
    [email],
    
    (err, rows) => {
    
    if (err) res.status(500).send(err);
    
    else if (rows.length) errors.push({ msg: "Email already exists" });
    
    else if (errors.length > 0) {
    
    res.statusCode = 400;
    
    res.send(errors);
    
    } else {
    
    pwdHash = bcrypt.hashSync(password, 10);
    
    var sql = `INSERT INTO user2 (resname, email, phone, pwdHash, address) VALUES ?`;
    
    const values = [[resname, email, phone, pwdHash, address]];
    
     
    
    mySqlConnection.query(sql, [values], function(err) {
    
    if (err) res.status(500).send(err);
    
    else res.status(200).redirect('/dashboard2?login+success');
    
    });
    
    }
    
    }
    
    );
    
    });

    router.post("/login", (req, res) => {
      const { email, password } = req.body
      mySqlConnection.query(
        "SELECT * FROM user2 WHERE email = ?",
        [email],
        (err, rows) => {
          if (err) res.status(500).send(err)
          user2 = rows[0];
          if (user2) {
            const result = bcrypt.compareSync(password, user2.pwdHash)
            if (result) {
              req.session.user2 = user2;
              res.status(200).redirect('/dashboard2?login+success');
            } else {
              res.status(400).send("pwd incorrect")
            }
          } else {
            res.status(400).send("email doesnot exist")
          }
        },
      )
    })
    router.get("/logout", (req, res) => {
      if (req.session.user2) {
        req.session.destroy(() => {
          res.status(200).redirect('/')
        })
      } else {
        res.status(400).send("you are not logged in")
      }
    })
    router.post("/Menu", (req, res) => {
      if (req.session.user2) {
        const {dishname ,cusine ,category, foodtype, dishprice } = req.body
        let errors = []
        if (!dishname || !dishprice )
          errors.push({ msg: "dish name or dish price cannot be empty" })
        else {
          var sql = `INSERT INTO Menu (dishname, cusine, category, foodtype, dishprice, restaurantid) VALUES ?`
          const values = [
            [dishname, cusine, category, foodtype, dishprice, req.session.user2.restaurantid],
          ]
    
          mySqlConnection.query(sql, [values], err => {
            if (err) res.status(500).send(err)
            res.status(200).redirect("/user2/Menu?dish+added+successfully")
          })
        }
      } else res.status(401).send("login to post")
    })
    
    router.get("/Menu", (req, res) => {
      if (req.session.user2) {
        mySqlConnection.query(
          "SELECT * FROM Menu WHERE restaurantid = ?",
          [req.session.user2.restaurantid],
          (err, rows) => {
            if (err) res.status(500).send(err)
            else
            {
            res.status = 200;
            res.render('Menu', {Menu : rows, user2 : req.session.user2})
            }
          },
        )
      } else res.status(401).send("login to view")
    })

    router.get("/Menu/:dishno", (req, res) => {
      if (req.session.user2) {
        mySqlConnection.query(
          "SELECT * FROM Menu WHERE dishno = ? AND restaurantid = ?",
          [req.params.dishno, req.session.user2.restaurantid],
          (err, rows) => {
            if (err) res.status(500).send(err)
            if (rows.length) res.status(200).send(rows[0])
            else res.status(404).send("Dish not found")
          },
        )
      } else {
        res.send("login to View")
      }
    })
    
    router.post("/Menu/:dishno", (req, res) => {
      if (req.session.user2) {
        const { dishname, category, cusine, foodtype, dishprice } = req.body
        mySqlConnection.query(
          "SELECT * FROM Menu WHERE dishno = ? AND restaurantid = ?",
          [req.params.dishno, req.session.user2.restaurantid],
          (err, rows) => {
            if (err) res.status(500).send(err)
            if (!rows.length) {
            res.status = 401;
            res.render("Menu", {msg: "[err]you dont have this dish"})
            }
            else {
              mySqlConnection.query(
                "UPDATE Menu SET dishname=?, cusine=?, category=?, foodtype=?, dishprice=? WHERE dishno = ?",
                [dishname, cusine, category, foodtype, dishprice, req.params.dishno],
                err => {
                  if (err) res.status(500).send(err)
                  else {
                  res.status = 200
                    res.redirect("/user2/Menu");
                  }
                },
              )
            }
          },
        )
      } else {
      res.status = 401;
      res.render("login", {msg: "[err]login first"})
      }
    })
    router.get("/Menu/delete/:dishno", (req, res) => {
      if (req.session.user2) {
        mySqlConnection.query(
          "SELECT * FROM menu WHERE dishno = ? AND restaurantid = ?",
          [req.params.dishno, req.session.user2.restaurantid],
          (err, rows) => {
            if (err) res.status(500).send(err)
            else if (!rows.length) {
              res.status = 401;
              res.redirect('Menu')
            }
            else {
              mySqlConnection.query(
                "DELETE FROM Menu WHERE dishno = ?",
                [req.params.dishno],
                (err) => {
                  if (err) res.status(500).send(err)
                  else {
                    res.status = 200;
                    res.redirect('/user2/Menu');
                  }
                },
              )
            }
          },
        )
      } else {
        res.send("login to Delete")
      }
    })
    router.post("/update", (req, res) => {
      if (req.session.user2) {
        const { name, phone } = req.body
        mySqlConnection.query(
          "UPDATE user2 SET resname=?, phone=? WHERE restaurantid = ?",
          [resname, phone, req.session.user2.restaurantid],
          (err, rows) => {
            if (err) throw err
            req.session.user2 = { ...req.session.user2, ...req.body }
            res.send(req.session.user2)
          },
        )
      } else res.send("please login")
    })

module.exports = router