var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var eventoSchema = new Schema({
  title: {type: String, required: true}
  ,start: {type: String, required: true}
  ,end: {type: String, required: true}
})

var Evento = mongoose.model('Evento', eventoSchema);
module.exports = Evento;
