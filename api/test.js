
var fs = require('fs');

module.exports = function (req, res) {
  fs.writeFileSync('./test.txt', 'testing123')
  var dir = fs.readdirSync('.')
  res.end('.... '+JSON.stringify(dir))
}
