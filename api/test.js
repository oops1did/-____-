
var fs = require('fs');
var os = require('os');
var querystring = require('querystring');

module.exports = function (req, res) {
    if (req.method = 'POST') {
        var d = ''
        req.on('data', function (_d) {
           d += _d.toString()
        })
        req.on('end', function () {
            req.end(d);    
        })
    } else {
        res.end(req.url);
    }
}
