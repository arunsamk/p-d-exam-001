
//var eApplication = angular.module('examApp');

eApplication.controller('jresumeCtrl', ['$scope','$http', 'multiPartform', function ($scope, $http, multiPartform) {
	$scope.storeResume = function(){
		$scope.customer = {};
		var uploadUrl = '/upload';
		multiPartform.post(uploadUrl, $scope.customer);
		/*console.log('Name ' + $scope.jform.name);
		console.log('Email ' + $scope.jform.email);
		/*var fileReader = new FileReader();
		fileReader.readAsDataURL($scope.jform.fileupload, $scope).then(function(result){
			$scope.filesrc = result;
		});
		console.log('File ' + $scope.filesrc);
		$scope.jform.file.upload = $scope.filesrc;
		console.log('file src value ' + $scope.filesrc);

		$http.post('/api/resumes', $scope.jform).success(function(data){
			$scope.jform = {};
			$scope.resumes = data;
			console.log(data);
		}).error(function(data){
			console.log('Error ' + data);
		});*/
	};
}]);