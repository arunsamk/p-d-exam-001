var eApplication = angular.module('examApp');

eApplication.controller('qbankCtrl', ['$scope', '$http', 'questSelectservice', function ($scope, $http, questSelectservice) {
	//console.log('Triggerring question bank controller');
	console.log('Value passed in service' + questSelectservice);
	var choice = questSelectservice;
	console.log('value of Choice  ' + choice);
	/* var parameters = {
		QuestCateg: questSelectservice.choice
	};  
	var config = {
		params: parameters
	};
	$http.get('/api/questions', config).success(function(data){
		$scope.questions = data;
		 console.log('From dbcore.js --> ' + data);
		 }).error(function(data){
		 console.log('Error ' + data);
		 });	 */
}]);