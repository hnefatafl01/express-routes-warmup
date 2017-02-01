var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('things');
});

function validUser(user) {
  const validEmail = typeof user.email == 'string' && user.email.trim() != "";
  const validPassword = typeof user.password == 'string' && user.password.trim() != "";
  if(validEmail && validPassword) {
    return true
  }
}

router.post('/signup', function(req,res,next){
  if(validUser(req.body)){
    let newUser = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    }
    queries
    .createUser(newUser)
    .then(function(result){
      res.json(result)
    })
    .catch(function(err) {
      next(err);
    })
  } else {
    next(new Error('Invalid User'))
  }
})

router.post('/login', function(req,res,next) {
  if(validUser(req.body)){
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    queries
    .getUserByEmail(userEmail)
    .then(function(result) {
      if(bcrypt.compareSync(userPassword, result.password)){
        res.json({
          results: result,
          message: '🔓'
        })
      } else {
        res.json({
          message: "Invalid password 🔐"
        })
      }
    })
  }
})

module.exports = router;
