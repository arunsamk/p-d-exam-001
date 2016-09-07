//'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the examApp
 */
var eApplication = angular.module('examApp');

eApplication.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.setQT = '';
	 $scope.rQuestion = function(){
	 	$scope.setQT = 'R';	 
	 	console.log('R');
	 };
	 $scope.mLearn=function(){
	 	$scope.setQT = 'ML';
	 	console.log('ML');
	 };
	 $scope.tabLeau=function(){
	 	$scope.setQT = 'Tableau';
	 	console.log('Tableau');
	 };
	 $scope.sqlQuestion=function(){
	 	$scope.setQT = 'SQL';
	 	console.log('SQL');
	 };
	 $scope.sasQuestion=function(){
	 	$scope.setQT = 'SAS';
	 	console.log('SAS');
	 };	  
}]);

eApplication.factory('questSelectservice',['$scope',function($scope){
	var choice = '';	
	var swQT = $scope.setQT;
	switch(swQT){
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
	return choice;
}]);