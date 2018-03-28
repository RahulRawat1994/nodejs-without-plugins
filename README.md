# nodejs-without-plugins
This git repository provides a simple static file server built with pure Node.js without the use of a framework

### index.js ###
```javascript
var http = require('http');
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
```

### routes.js ###
var fs = require('fs');

/**
 * This function return view of specific url
 * @param {string} url url string
 * @returns {callback} html content.
 */

exports.getView = function (url, callback) {

    var filepath='';

    switch(url) {
        case '/home':
            filepath='home.html';
            break;
        case '/about':
            filepath='about.html';
            break;
        default:
            filepath='default.html';
    }
   
    fs.readFile(filepath, function(err, data) {
        callback(data);
    });
};
