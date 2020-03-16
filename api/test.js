
var fs = require('fs');
var os = require('os');
var querystring = require('querystring');

module.exports = function (req, res) {
    if (req.method === 'PUT') {
        var incoming = ''
        req.on('data', function (d) { incoming += d.toString() })
        req.on('end', function () {
            res.end('from post'+incoming);
        })
    } else {
        res.end(req.url);
    }
}
