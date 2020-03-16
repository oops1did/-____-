
var fs = require('fs')
var os = require('os')
var crypto = require('crypto')
var querystring = require('querystring')
var hash = crypto.createHash('sha256')

var password_hash = 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f'

function hash256 (thing) {
    hash.update(thing)
    return hash.digest('hex')
}

module.exports = function (req, res) {
    if (req.method === 'POST') {
        var incoming = ''
        req.on('data', function (d) { incoming += d.toString() })
        req.on('end', function () {
            var t = querystring.parse(incoming)
            return res.end(hash256(t.password));
        })
    } else {
        res.end(req.url)
    }
}
