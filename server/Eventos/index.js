var bodyParser = require("body-parser")
    ,htpp = require("http")
    ,express = require("express")
    ,Router = express.Router()
    ,Operaciones = require('../CRUD.js');

Router.post('/newUser', function(req, resp){
    Operaciones.crearUsuario(function(error, result){
      if(error) console.log("Error en creación de usuario");
      resp.json(result);
    })
})

Router.post('/login', function(req, resp){
  var user = req.body.user;
  var pass = req.body.pass;
  Operaciones.login(user, pass, function(error, result){
    if(error) console.log("Error en creación de usuario");
    resp.json({"msg": result});
  })
})

Router.post('/logout', function(req, resp){
  var user = req.body.user;
  var pass = req.body.pass;
  resp.json({"msg": "Validado", "user": `"${user} - ${pass}"`});
})

Router.get('/all', function(req, resp){
  Operaciones.consultar(function(error, eventos){
    if(error) console.log("Error en consultar y actualizar ->" + error);
    resp.json(eventos);
  })
})

Router.post('/new', function(req, resp){
  var evento = {
      title: req.body.title
      ,start: req.body.start
      ,end: req.body.end
    };

  Operaciones.insertarRegistros(evento, function(error, result){
    if(error)console.log("Error insertarRegistros -> " + error)
    console.log(result)
  });
  resp.json({msg: "Evento creado con éxito"});
})

Router.post('/update', function(req, resp){
  var evento = {
      id: req.body.id
      ,start: req.body.start
      ,end: req.body.end
    };
  Operaciones.actualizarEvento(evento, function(error, result){
    if(error)console.log("Error insertarRegistros -> " + error)
    console.log(result)
  });
  resp.json({msg: "Evento actualizado con éxito"});
})

Router.post('/delete', function(req, resp){
  Operaciones.eliminarRegistro(req.body.evento, function(error, result){
    if(error)console.log("Error insertarRegistros -> " + error)
    console.log(result)
  });
  resp.json({msg: "Evento eliminado con éxito"});
})

module.exports = Router;
