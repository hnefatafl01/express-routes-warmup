var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('things');
});

router.post('/', function(req,res){
  console.log(req.body);
  res.json(req.body);
  queries.getUserByEmail(req.body.email).then(function(user){
    res.json({user})
  })
})

module.exports = router;
