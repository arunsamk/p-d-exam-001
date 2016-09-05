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
		console.log('Inside R Function');
		var parameters = {
			QuestCateg: 'R'
		};
		var config = {
			param: parameters
		};
		$http.get('/api/questions', config).success(function(data){
			$scope.questions = data;
			console.log('Successful get request with data pop');
		}).error(function(data){
			console.log('Error' + data);
		});
	};

}]);
