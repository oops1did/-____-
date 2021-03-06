
var fs = require('fs')
var os = require('os')
var crypto = require('crypto')
var querystring = require('querystring')
var hash = crypto.createHash('sha256')

var password_hash = 'fdea8354e753932a0cd5d6b31c2cfc01f5c504ed589aba7550a5c32ba970a84f'

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
            if (hash256(t.password) === password_hash) {
                return res.end('ok');
            } else {
                return res.end('denied')   
            }
        })
    } else {
        res.end(req.url)
    }
}
