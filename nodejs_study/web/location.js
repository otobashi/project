var http = require('http');

http.createServer(function(request,response){
	response.writeHead(302,{
		'Location':'http://mydb24.com'
	});
	response.end();
}).listen(52274, function(){
	console.log('Server Running at http://127.0.0.1:52274');
});
