//'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the examApp
 */
var eApplication = angular.module('examApp');

//Factory to transfer value to qbank.js file
eApplication.factory('questSelectservice', ['$scope', function($scope){
	console.log('Getting Inside Factory');
	var choice = '';	
	var swQt = setQt;
	console.log('Value of swQt ' + swQt);
	switch(swQt){
		case 'R':
		choice = 'R';
		break;
		case 'SAS':
		choice = 'SAS';
		break;
		case 'ML':
		choice = 'ML';
		break;
		case 'Tableau':
		choice = 'Tableau';
		break;
		case 'SQL':
		choice = 'SQL';
		break;
		default:
		choice='';
		break;
	}
	console.log('Selected Value ' + choice);
	return choice;
}]);

//MainCtrl 
eApplication.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.setQt = '';
	 $scope.rQuestion = function(){
	 	$scope.setQt = 'R';	 
	 	console.log('setQt ' + $scope.setQt);
	 };
	 $scope.mLearn=function(){
	 	$scope.setQt = 'ML';
	 	console.log('ML');
	 };
	 $scope.tabLeau=function(){
	 	$scope.setQt = 'Tableau';
	 	console.log('Tableau');
	 };
	 $scope.sqlQuestion=function(){
	 	$scope.setQt = 'SQL';
	 	console.log('SQL');
	 };
	 $scope.sasQuestion=function(){
	 	$scope.setQt = 'SAS';
	 	console.log('SAS');
	 };	  
}]);

