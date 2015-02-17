// Create EventEmitter
var custom = new process.EventEmitter();

// Connet Event
custom.on('tick',function(){
	console.log('Execute Event');
});

// 이벤트 강제발생
custom.emit('tick');
