
var fs = require('fs');
var os = require('os');
var querystring = require('querystring');

module.exports = function (req, res) {
    if (req.method === 'PUT') {
        res.end('from post');
    } else {
        res.end(req.url);
    }
}
