process.on('exit', function(){
	console.log('안녕히 가거라');
});

// uncaughtException connect
process.on('uncaughtException',function(error){
	console.log('예외가 발생했다.');
});

// 2초 간격으로 3번 예외를 발생시킨다.
var count = 0;
var id = setInterval(function(){
	count++;
	if(count == 3){
		clearInterval(id);
	}
	//예외 강제발생
	error.error.error();
},2000);
