// Load Module
var rint = require('./rint');

// Connect Event
rint.timer.on('tick', function(){
	console.log('이벤트를 실행합니다.');
});
