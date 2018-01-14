/**
 * Created by timmeno1 on 15.01.2018.
 */

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var User = new mongoose.Schema({
  email : {
    type: String,
    unique: true,
    required: true
  },
  username : {
    type: String,
    unique: true,
    required: true
  },
  password : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', User);
