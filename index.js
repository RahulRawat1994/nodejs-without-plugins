var http = require('http');
var fs = require('fs');
var routes= require('./routes');

process.env.PORT=8000;
/**
 * Starting Server 
 */

http.createServer(function (req, res) {

  routes.getView(req.url,function(html){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  });
  
}).listen(process.env.PORT);


console.log('Application started on '+process.env.PORT);