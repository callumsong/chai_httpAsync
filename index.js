var server = require("./lib/server");
var router = require('./lib/router');
var requestHandlers = require('./lib/request_handlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/time'] = requestHandlers.read_time;
handle['/greet/callum'] = requestHandlers.read_name;

server.start(router.route, handle);