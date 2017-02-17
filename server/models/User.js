var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema =  new Schema({
  mail: {type:String, required: true}
  ,user: {type:String, required: true}
  ,fecNacimiento: {type:String, required: true}
  ,pass: {type:String, required: true}
})


var User = mongoose.model('User', userSchema);
module.exports = User;
