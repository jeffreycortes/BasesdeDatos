var  bodyParser = require('body-parser')
    ,http = require('http')
    ,express = require('express')
    ,socketio = require('socket.io')
    ,path = require( 'path' )
    ,events = require('./Eventos');


var port = port = process.env.PORT || 3000
    ,app_root = __dirname
    ,app = express()
    ,Server = http.createServer(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, '../client')));
    app.use('/events', events);


    Server.listen(port, function(){
      console.log("Servidor funcionando en puerto: " + port);
    });

    /*Operaciones.eliminarRegistro((error, result)=>{
      if(error)console.log(error)
      console.log(result)
    });*/
