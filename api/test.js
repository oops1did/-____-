
var fs = require('fs');

module.exports = function (req, res) {
  var dir = fs.readdirSync()
  res.end('.... '+JSON.stringify(dir))
}
