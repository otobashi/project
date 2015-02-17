// Create Web Server
var http = require('http');

server = http.createServer();

// Execute Server
server.listen(52237, function(){
	console.log('Server Running Port : 52237');
});

// 10초 후 함수 실행
setInterval(function(){
	server.close();
},10000);
