var eApplication = angular.module('examApp');

eApplication.directive('file', [function() {
	var fileInput = function($parse){
		return {		
			restrict: 'EA',
			template: "<input type='file' />",
			replace: true,
			link: function (scope, element, attrs) {
				var modelGet = $parse(attrs.fileInput);
				var modelSet = modelGet.assign;
				var ngClick = $parse(attrs.ngClick);
				var updateModel = function(){
					scope.$apply(function(){
						modelSet(scope, element[0].files[0]);
						onClick(scope);
					});
				};
				element.bind('change', updateModel);
			}
		};
	};
}]);

eApplication.controller('jresumeCtrl', ['$scope','$http', function ($scope, $http, fileReader) {
	$scope.storeResume = function(){
		console.log('Name ' + $scope.jform.name);
		console.log('Email ' + $scope.jform.email);
		var fileReader = new FileReader();
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
		});
	};
}]);