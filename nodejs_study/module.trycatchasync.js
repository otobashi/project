var fs = require('fs');

// Read File
fs.readFile('textfile.txt', 'utf8', function (error, data){
	if (error){
		console.log(error);
	} else {
		console.log(data);
	}
})

// Write File
fs.writeFile('textfile.txt', 'Hello Sydney!', 'utf8', function(error){
	if (error){
		console.log(error);
	} else {
		console.log('FILE WRITE COMPLETE');
	}
})