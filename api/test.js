
var fs = require('fs');
var os = require('os');

module.exports = function (req, res) {
    res.end(req.url);
}
