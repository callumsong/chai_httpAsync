var querystring = require('querystring');
var url = require('url');

function read_time(response, request) {
  console.log('Request handler "read_time" was called.');
  var date = new Date();
  var pac_time = date.toLocaleTimeString('en-US');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(pac_time);
  response.end();
}

function read_name (response, request) {
  console.log('Request handler "read_name" was called.');
  var pathname = url.parse(request.url).pathname;
  var string_name = pathname.substr(pathname.indexOf('/', 1)+1, pathname.length-1);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('What up ' + string_name);
  response.end();
}

function start(response, request) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("Go to /time to read the current time and /greet/name and enter your name");
  response.end();
}

exports.read_time = read_time;
exports.read_name = read_name;
exports.start = start;