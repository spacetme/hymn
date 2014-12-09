
var httpProxy = require('http-proxy')
var fs = require('fs')

//
// Create the HTTPS proxy server in front of a HTTP server
//
httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 9000
  },
  ssl: {
    key: fs.readFileSync(process.env.HOME + '/.ssl/server.key', 'utf8'),
    cert: fs.readFileSync(process.env.HOME + '/.ssl/server.crt', 'utf8')
  }
}).listen(9443);
