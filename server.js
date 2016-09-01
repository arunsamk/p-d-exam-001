
var express = require('express');
var application = express();

//Making server file to assign port dynamically.
var port = process.env.PORT || 7010;

//Making express to look in the public directory for (css, js, html .....).
application.use(express.static(__dirname + '/public'));

//Setting the home page
application.get('*', function(request, response){
	response.sendFile('index');
});

application.listen(port, function(){
	console.log('Application using response.sendFile is running on port: ' + port);
});