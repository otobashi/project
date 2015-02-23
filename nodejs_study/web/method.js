var http = require('http');

http.createServer(function(request,response){
	if (request.method == 'GET'){
		console.log('This is Get Method');
	}
	else if (request.method == 'POST'){
		console.log('This is Post Method');
	}
}).listen(52238,function(){
	console.log('Server Running at http://localhost:52238');
});