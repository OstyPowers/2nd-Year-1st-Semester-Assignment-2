var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

const type = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css'
}
http.createServer(function (request, response) {
  let filepath = url.parse(request.url).pathname
  let extension = path.parse(filepath).ext
  console.log(filepath + " requested")
  let fileName = filepath.substr(1)
  fs.readFile(fileName, function (error, info) {
    if (error) {
      console.log(error)
      response.writeHead(404, {
        'Content-Type': 'text/html'
      })
      response.end(`404 not found error!`)
      return
    }
    response.writeHead(200, {
      'Content-Type': [extension]
    })
    response.write(info)   
    console.log('found file: '+ filepath)
    response.end() 
  })
}).listen(8081)

console.log('Server is running at localhost:8081/')