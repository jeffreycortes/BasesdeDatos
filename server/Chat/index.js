var jsdom = require("jsdom").jsdom;
var document = jsdom('<html></html>', {});
var window =  document.defaultView;

var  bodyParser = require('body-parser')
    ,http = require('http')
    ,express = require('express')
    ,Router = express.Router()
    ,jQuery = require('jquery')(window)
    ,io = require('socket.io')
    ,Storage = require('../Storage');


Router.get('/users', function(req, res){
  Storage.getData('users')
          .then(function (users) {
            res.json(users)
          })
          .catch(function (error) {
            res.sendStatus(500).json(error)
          })
})

Router.post('/users', function(req, res){
  var user = req.body.user;
  Storage.getData('users')
          .then(function (users) {
            return new Promise(function(resolve, reject){
                Storage.saveData('users', user, users)
                        .then(function (message) {
                          resolve(message)
                        })
                        .catch(function(error){
                          reject(error)
                        })
             })
          })
})

Router.get('/messages', function(req, res){
  var message = req.body.message
})


Router.post('/messages', function(req, res){
  var message = req.body.message
  Storage.getData('users')
          .then(function (users) {
            return new Promise(function(resolve, reject){
                Storage.saveData('users', user, users)
                        .then(function (message) {
                          resolve(message)
                        })
                        .catch(function(error){
                          reject(error)
                        })
             })
          }).then(function () {
            res.json(message)
          })
          .catch(function () {
            res.sendStatus(500).json(error)
          })
})

module.exports = Router;
