//Event Connect
process.on('exit',function(){
	console.log('Bye Bye...');
});

// 프로그램 종료
process.exit();

// 강제종료
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행중
console.log('프로그램 실행중');
