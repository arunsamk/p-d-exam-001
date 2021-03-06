//'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the examApp
 */
var eApplication = angular.module('examApp');


//MainCtrl 
eApplication.controller('MainCtrl', ['$scope', 'shareQuestionService', function ($scope, sharedQuestion) {
	$scope.rQuestion = function(){
		var choice = 'R';
		//console.log('Value of Choice in controller ' + choice);
		sharedQuestion.transferChoice(choice);
	};
	$scope.mLearn = function(){
		var choice = 'ML';
		sharedQuestion.transferChoice(choice);
	};
	$scope.tabLeau = function(){
		var choice = 'Tableau';
		sharedQuestion.transferChoice(choice);
	};
	$scope.sqlQuestion = function(){
		var choice = 'SQL';
		sharedQuestion.transferChoice(choice);
	};
	$scope.sasQuestion = function(){
		var choice = 'SAS';
		sharedQuestion.transferChoice(choice);
	};
}]);