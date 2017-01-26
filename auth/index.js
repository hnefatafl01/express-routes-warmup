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
}

router.post('/signup', function(req,res,next){
  console.log(req.body);
  if(validUser(req.body)) {
    queries
    .getUserByEmail(req.body.email)
    .then(function(user){
      res.json({user})
    })
  } else {
    next(new Error('Invalid User'))
  }

})

module.exports = router;
