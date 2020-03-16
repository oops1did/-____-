
var fs = require('fs');
var os = require('os');
var querystring = require('querystring');

module.exports = function (req, res) {
    if (req.method === 'POST') {
        var incoming = ''
        req.on('data', function (d) { incoming += d.toString() })
        req.on('end', function () {
            var t = querystring.parse(incoming);
            res.end('from post'+JSON.stringify(t)+ ' ' Object.keys(t).length);
        })
    } else {
        res.end(req.url);
    }
}
