
var express = require('express');
var application = express();
var mongoose  = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var Schema = mongoose.Schema;

//Making server file to assign port dynamically.
var port = process.env.PORT || 7070;

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

//-----------------------Configuration---------------------------------------

//------------routing static files.....
//Making express to look in the public directory for (css, js, html .....).
application.use(express.static(__dirname + '/public'));
application.use('/scripts', express.static(__dirname + '/scripts'));
application.use('/styles', express.static(__dirname + '/styles'));
//application.use('/views/', express.static(__dirname + '/views'));
application.use(morgan('dev'));
application.use(bodyParser.urlencoded({ 'extended': true }));
application.use(bodyParser.json());
application.use(bodyParser.json({ type: 'application/vnd.api+json'}));
application.use(methodOverride());

//routes----------------------------
//get all Questions
application.get('/api/questions', function(request, response){

	// conditional selecting
	//Acquring records with specific Question Category and Question Difficulty Level
	console.log('Hello from Get request in server.js');
	console.log('Value in request QuestCateg ' + request.query.QuestCateg);
	//console.log('Value in request from get ' + request);
	if( request.query.QuestCateg && request.query.QuestDCateg ){
		Question.find({ QuestCateg : request.query.QuestCateg, QuestDCateg : request.query.QuestDCateg }, function(err,questions){

			//In case of error return the error to response.
			if(err)
				response.send(err);
			response.json(questions);
		});
	}else{

		//Acquring records with specific Question Category
		if( request.query.QuestCateg ){			
			console.log('Getting Inside single selections');
			Question.find( { QuestCateg : request.query.QuestCateg }, function(err, questions){

				//In case of error return the error to reponse
				if(err)
					response.send(err);
				response.json(questions);
				console.log(questions);
			});
		}else{
			//Acquring All records from MongoDB
			Question.find(function(err, questions){

				//In case of error return the error to reponse
				if(err)
					response.send(err);
				response.json(questions);
			});
		}
	}
});

// Create question and send back all question after creation

application.post('/api/questions', function(request, response){

	// Create a question, information comes from ajax request from angular
	if ( request.body.QuestCateg && request.body.QuestDCateg && request.body.QuestTxt && request.body.AnswerTxt){
		console.log('A ok for new Insertion into mongoDB');
		Question.create({
			QuestCateg : request.body.QuestCateg,
			QuestDCateg : request.body.QuestDCateg,
			QuestTxt : request.body.QuestTxt,
			AnswerTxt : request.body.AnswerTxt,
			done : false
		}, function(err, questions){
			if(err)
				response.send(err);

			//Repopulating the view after insert a new row in the collection

			Question.find(function(err, questions){

				//if there is an error retrieving data, send the error.

				if(err)
					response.send(err);
				response.json(questions);
			});
		});
	}
	

});

//deleting a quesion

application.delete('/api/questions/:question_id', function(request, response){

	// deleting or removing a question based on the id.

	Question.remove({
		_id : request.params.question_id
	},function(err, question){
		if(err)
			response.send(err);

		//get and return all questions after deletion of a question

		Question.find(function(err, questions){

			//if error retrieving data, send the error.

			if(err)
				response.send(err);
			response.json(questions);
		});
	});
});

//Setting the home page
application.get('/', function(request, response){
	response.sendFile('index');
});

/*application.get('/logadmin', function(request, response){
	response.render('login.html');
});*/

application.listen(port, function(){
	console.log('Application using response.sendFile is running on port: ' + port);
});