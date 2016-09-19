
//var eApplication = angular.module('examApp');

eApplication.controller('jresumeCtrl', ['$scope','$http', 'multipartForm', function ($scope, $http, multipartForm) {
	$scope.storeResume = function(){
		var file = $scope.jform.uploadFile;
		//console.log('File is ');
		//console.dir(file);
		var uploadUrl = '/fileUpload';
		//console.log('ORIGINAL FILE NAME : ' + file.name);
		multipartForm.uploadFileToUrl(file, uploadUrl);		
	};
	clearuploaddb = function(file){
		//console.log('INSIDE CLEARDB FUNCTION');		
		//console.log('FILE NAME in clearuploaddb function ' + file.name);
		$scope.jform.fname = file.name;
		//console.log('Value passed into $scope ' + $scope.jform.fname);
		$http.post('/api/resumes', $scope.jform).success(function(data){
			$scope.jform = {};
			angular.element("input[type='file']").val(null); //clears the file input --need to write a directive for this--
			//console.log('Resume details successfully put in mongodb');			
		}).error(function(data){
			console.log('Error ' + data);
		});
	};
}]);