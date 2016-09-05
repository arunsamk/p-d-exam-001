//'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the examApp
 */

angular.module('examApp').controller('MainCtrl', ['$scope', '$http', function($scope, $http){

	 $scope.rQuestion = function(){
	 //console.log('Inside list question funtion');
	 var parameters = {
		QuestCateg: 'R'
	};  
	var config = {
		params: parameters
	};
	$http.get('/api/questions', config).success(function(data){
		$scope.questions = data;
		 console.log('From dbcore.js --> ' + data);
		 }).error(function(data){
		 console.log('Error ' + data);
		 });
	 };
	  
}]);