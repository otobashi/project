var fs = require('fs');

// Declare Variable
var data = 'Hello World .. !';

// Use Module
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(error){
	console.log('WRITE FILE ASYNC COMPLETE');
})

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
