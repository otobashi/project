var http = require('http');

server = http.createServer();

server.on('request', function(){
	console.log('Request On');
});

server.on('connection', function(){
	console.log('Connection On');
});

server.on('close', function(){
	console.log('Close On');
});

server.listen(52237);
