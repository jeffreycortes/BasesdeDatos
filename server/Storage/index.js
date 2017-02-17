var fs = require('fs')
    ,path = require('path')

module.exports = {
  saveData: function(dataType, newData, data){
    var dataPath = path.join(__dirname,  dataType == 'users' ? '/data/users.json' : '/data/messages.json');
    data.push(newData)
    return new Promise(function(resolve, reject){
      fs.writeFile(dataPath, JSON.stringify(data), function(err){
        if(err) reject(err)
        resolve('OK')
      })
    })
  },
  getData: function(dataType){
    var dataPath = path.join(__dirname, dataType == 'users' ?  '/data/users.json' : '/data/messages.json');

    return new Promise(function(resolve, reject){
      fs.readFile(dataPath, 'utf8', function(err, readData){
        if(err) reject(err)
        resolve(JSON.parse(readData))
      })
    })
  }
};
