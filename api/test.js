
var fs = require('fs');
var os = require('os');

module.exports = function (req, res) {
  var tmpdir = os.tmpdir();
  var dir = fs.readdirSync(tmpdir)
  fs.writeFileSync(tmpdir+'/test.txt', 'testing123');
  var file = fs.readFileSync(tmpdir+'/test.txt')
  res.end('.... '+JSON.stringify(dir)+' '+file.toString())
}
