var http = require('http');

http.createServer(function(request,response){
	response.writeHead(404);
	response.end('<h1>No Page</h1>');
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});