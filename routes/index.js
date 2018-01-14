/**
 * Created by timmeno1 on 15.01.2018.
 */
var express = require('express');
var router = express.Router();
var api = require('../dbapi');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    var data = {
      title: 'Express',
      user : req.session.user
    };
    res.json(data);
  } else {
    var data = {
      title: 'Express'
    };
    res.json(data);
  }
});

module.exports = router;
