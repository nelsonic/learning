var fs = require('fs');

//1. Set up the function openAndWriteToSystemLog

function openAndWriteToSystemLog(writeBuffer, callback) {
	
	//first open the example file with 'a' flag and then we can manipulate it
	fs.open('./example.txt', 'a', function opened(err, fd){
		if(err) { return callback(err); } 
		//a little overcomplicated but this passes the error to the callback which is actually the function 'done' created when openAndWriteToSystemLog is called below
		//using callback here means you only have to deal withe the error in one place

		//creating function notifyError closes the file and passes the error to callback to deal with it
		function notifyError(err){
			fs.close(fd, function(){
				callback(err); 
			}); //end of fs.close
		} //end of notifyError function

		var bufferOffset = 0;
			bufferLength = writeBuffer.length;
			filePosition = null; //file opened with 'a' flag so stream positioned at end of file

		//once fs.write has done its job, callback 'wrote' is called to deal with any errors and close the fiel
		fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition,
			//the callback 'wrote' is given these two standard arguments as per documentation where 'written' is no. of bytes written to the file
			function wrote(err, written){
				//if there's an error, close the file AND throw the error
				if(err) { return notifyError(err);}

				//if there's no error, close the file and asses the error to callback to deal with it
				//there will be no 'err' so the callback (function 'done' defined below) will simply console.log "All done with no errors"
				fs.close(fd, function(){
					callback(err);
				}); //end of fs.close
			}); //end of function wrote
	}); //end of fs.open

} //end of openAndWriteToSystemLog

//2. Call the function

openAndWriteToSystemLog(new Buffer('Adding this new string to the file'), function done(err){
	//if there's an error, console.log the error message
	if (err) {
		console.log("error while opening and writing:", err.message);
		return; //this return stops the entire execution of openAndWriteToSystemLog entirely - in this case it returns null, so false
	}
	//if there are no errors
	console.log("All done with no errors")
} //end of function 'done'
); //end of openAndWriteToSystemLog