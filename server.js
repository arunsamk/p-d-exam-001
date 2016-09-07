
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
//Question Schema
var questionSchema = new Schema({
	QuestCateg: String,
	QuestDCateg: String,
	QuestTxt: String,
	AnswerTxt: String
});

//Contact Schema
var contactSchema = new Schema({
	FirstName: String, Email: String, Phone: String, Subject: String, Message: String, MsgDate: { type: Date, default: Date.now }
});

//Resume Schema
var resumeSchema = new Schema({
	Name: String, Email: String, FileResume: { mime: String, bin: Buffer }
});
//Defining model for [Question, Contact, Resume] in mongoose
var Question = mongoose.model('dummyQuestions', questionSchema);
var Contact = mongoose.model('dumcontacts', contactSchema);
var Resume = mongoose.model('dumresumes', resumeSchema)

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
// Question related database operations
application.get('/api/questions', function(request, response){
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
			Question.find( { QuestCateg : request.query.QuestCateg }, function(err, questions){

				//In case of error return the error to reponse
				if(err)
					response.send(err);
				response.json(questions);		
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

// Adding feedback content into mongoDB
application.post('/api/contacts', function(request, response){	
		console.log('A ok for new Insertion into mongoDB');
		Contact.create({
			FirstName : request.body.fname,
			Email : request.body.email,
			Phone : request.body.phone,
			Subject : request.body.subject,
			Message: request.body.message,
			done : false
		}, function(err, contacts){
			if(err)
				response.send(err);
			response.json(contacts);
		});
});

// Getting and storing a file / resume in mongodb
application.post('/api/resumes', function(request, response){
	console.log('Ready for Insertion');
	Resume.create({
		Name: request.body.name, 
		Email: request.body.email, 
		FileResume: request.body.file, 
		done: false
	}, function(err, resumes){
		if(err)
			response.send(err);
		response.json(resumes);
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
	console.log('Node Server is running on port: ' + port);
});