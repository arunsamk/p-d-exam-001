
var express = require('express');
var application = express();
/*var mongoose  = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var Schema = mongoose.Schema;
*/
//Making server file to assign port dynamically.
var port = process.env.PORT || 7010;
/*
// Connecting to MongoDB
var connection = mongoose.connect('mongodb://localhost/crkappi');

// Defining Database Schema

var questionSchema = new Schema({
	QuestCateg: String,
	QuestDCateg: String,
	QuestTxt: String,
	AnswerTxt: String
});

//Defining a model in mongoose
var Question = mongoose.model('dummyQuestions', questionSchema);
*/
//-----------------------Configuration---------------------------------------

//Making express to look in the public directory for (css, js, html .....).
application.use(express.static(__dirname + '/public'));
/*application.use(morgan('dev'));
application.use(bodyParser.urlencoded({ 'extended': true }));
application.use(bodyParser.json());
application.use(bodyParser.json({ type: 'application/vnd.api+json'}));
application.use(methodOverride());
*/
//Setting the home page
application.get('*', function(request, response){
	response.sendFile('index');
});

application.listen(port, function(){
	console.log('Application using response.sendFile is running on port: ' + port);
});