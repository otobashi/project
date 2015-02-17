// Declare variable
var onUncaughtException = function (error){
	console.log('예외발생');

	// Remove Event
	process.removeListner('uncaughtException', onUncaughtException);
};


// Connect Event
process.on('uncaughtException',onUncaughtException);

// 2초마다 함수 실행
setInterval(function(){
	error.error.error('^__^');
}, 2000);
