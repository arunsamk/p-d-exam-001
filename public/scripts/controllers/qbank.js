var eApplication = angular.module('examApp');

eApplication.controller('qbankCtrl', ['$scope', '$http', 'shareQuestionService', function ($scope, $http, shareQuestionService) {

	// Choice of Question Category from previous page and based on the choice populating values.
	//console.log('Triggerring question bank controller');
	//console.log('Value passed in service' + shareQuestionService);
	var choice = shareQuestionService.choice;
	//console.log('value of Choice in qbankCtrl  ' + choice);
	var parameters = {
		QuestCateg: choice
	};
	var config = {
		params: parameters
	};
	$http.get('/api/questions', config).success(function(data){
		$scope.questions = data;		
	}).error(function(data){
		console.log('Error ' + data);
	});

	//Based on user selection 'R' values are populated from the question bank.
	$scope.rQuestion = function(){
		var parameters = {
			QuestCateg: 'R'
		};
		var config = {
			params: parameters
		};
		$http.get('/api/questions', config).success(function(data){
			$scope.questions = data;
		}).error(function(data){
			console.log('Error ' + data);
		});
	};

	//Based on user selection 'ML' values are populated from the question bank.
	$scope.mlQuestion = function(){
		var parameters = {
			QuestCateg: 'ML'
		};
		var config = {
			params: parameters
		};
		$http.get('/api/questions', config).success(function(data){
			$scope.questions = data;
		}).error(function(data){
			console.log('Error ' + data);
		});
	};

	//Based on user selection 'Tableau' values are populated from the question bank.
	$scope.tabQuestion = function(){
		var parameters = {
			QuestCateg: 'Tableau'
		};
		var config = {
			params: parameters
		};
		$http.get('/api/questions', config).success(function(data){
			$scope.questions = data;
		}).error(function(data){
			console.log('Error ' + data);
		});
	};

	//Based on user selection 'SQL' values are populated from the question bank.
	$scope.sqlQuestion = function(){
		var parameters = {
			QuestCateg: 'SQL'
		};
		var config = {
			params: parameters
		};
		$http.get('/api/questions', config).success(function(data){
			$scope.questions = data;
		}).error(function(data){
			console.log('Error ' + data);
		});
	};

	//Based on user selection 'SAS' values are populated from the question bank.
	$scope.sasQuestion = function(){
		var parameters = {
			QuestCateg: 'SAS'
		};
		var config = {
			params: parameters
		};
		$http.get('/api/questions', config).success(function(data){
			$scope.questions = data;
		}).error(function(data){
			console.log('Error ' + data);
		});
	};
}]);