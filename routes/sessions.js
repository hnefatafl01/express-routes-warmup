var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries
    .getSessions()
    .then(function(result){
      res.json(result)
    })
});

router.get('/:id', function(req, res, next) {
  queries
    .getSessionById(req.params.id)
    .then(function(result){
      res.json(result)
    })
});

router.post('/', function(req ,res, next) {
  // console.log(req.body);
  queries
    .addSession(req.body)
    .then(function(result){
      res.json({id: result})
    })
})

router.put('/:id', function(req, res, next) {
  queries
    .updateSession(req.body,req.params.id)
    .then(function(result){
      res.json(result)
    })
})

router.delete('/:id', function(req, res) {
  queries
    .deleteSession(req.params.id)
    .then(function(result) {
      res.json({
        result: result,
        message: 'deleted session'
      })
    })
})

module.exports = router;
