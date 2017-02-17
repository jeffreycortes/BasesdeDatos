var User = require('./models/User.js')
    ,Evento = require('./models/Evento.js')
    ,MongoClient = require('mongodb').MongoClient
    ,mongoose = require('mongoose');

var url = "mongodb://localhost";

module.exports.crearUsuario = function(callback){
  let newUser = new User({mail: "next.user1@nextu.com.co", user: "usuario uno", fecNacimiento: "1980-01-01", pass: "123"})

  mongoose.connect(url + "/users");
  newUser.save((error)=>{
    mongoose.disconnect();
    if(error) callback(error);
    callback(null, "El usuario " + newUser.mail +" ha sido Guardado exitosamente. Clave de acceso: " + newUser.pass);
  })
}

module.exports.login = function(mail,pass, callback){
  mongoose.connect(url + "/users");
  User.find({mail: mail, pass: pass}).find((error, result)=>{
    console.log(result);
    mongoose.disconnect();
    if(error) callback("Error en método login -> " + error)
    callback(null, (result.length > 1) ? "Validado": "No Validado")
  })
}

module.exports.insertarRegistros = function(evento, callback)
{
  mongoose.connect(url + "/usersEventos");
  let eventNew = new Evento(evento);
  eventNew.save((error, room)=>{
    mongoose.disconnect();
    if(error) callback(error);
    callback(null, {idEvento: room.id, msg: "Evento Guardado exitosamente"});
  })
}

module.exports.eliminarRegistro = function(title, callback){
  mongoose.connect(url + "/usersEventos");
  Evento.remove({title: title}, (error)=>{
    mongoose.disconnect();
    if(error) callback(error);
    callback(null, "Se eliminó el registro con exito");
  })
}

module.exports.consultar = function(callback){
  mongoose.connect(url + "/usersEventos");
  Evento.find({}).exec((error, eventos)=>{
    mongoose.disconnect();
    if(error) callback("Error en método consultar -> " + error)
    callback(null, eventos)
  })
}


module.exports.actualizarEvento = function(evento, callback){
  mongoose.connect(url + "/usersEventos");
  Evento.find({_id: evento.id}).exec((error, result)=>{
    mongoose.disconnect();
    if(error) callback("Error en método consultar para actualizar -> " + error)
    Evento.update(evento,(error, result)=>{
      if(error) callback("Error en método actualizar-> " + error)
      callback(null, "Se actualizó el registro con exito")
    })
  })
}
