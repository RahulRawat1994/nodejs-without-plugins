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