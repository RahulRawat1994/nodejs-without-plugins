var http = require('http');
var fs = require('fs');
var routes= require('./routes');

/**
 * Starting Server 
 */

http.createServer(function (req, res) {

  routes.getView(req.url,function(html){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  });
  
}).listen(8000);


console.log('Application started on 8000');