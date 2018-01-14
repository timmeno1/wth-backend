/**
 * Created by timmeno1 on 15.01.2018.
 */

var env = require('./config/config').env;
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(env.dbUrl);
var crypto = require('crypto');
var User = require('./models/user');

// User API

exports.createUser = function(userData){
  var user = {
    username: userData.username,
    email: userData.email,
    password: hash(userData.password)
  };
  return new User(user).save();
};

exports.getUser = function(id) {
  return User.findOne(id);
};

exports.checkUser = function(userData) {
  return User
    .findOne({email: userData.email})
    .then(function(doc){
      if ( doc.password === hash(userData.password) ){
        console.log("User password is ok");
        return Promise.resolve(doc)
      } else {
        return Promise.reject("Error wrong");
      }
    });
};

function hash(text) {
  return crypto.createHash('sha1')
    .update(text).digest('base64');
}
