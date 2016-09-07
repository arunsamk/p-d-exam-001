var eApplication = angular.module('examApp');

eApplication.controller('contactCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.addContact = function(){		
		$http.post('/api/contacts', $scope.cfrm).success(function(data){
			$scope.cfrm={};
			$scope.cfrm.fname = ''; $scope.cfrm.email = ''; $scope.cfrm.phone = ''; $scope.cfrm.subject = ''; $scope.cfrm.message = '';			
			console.log('Inside POST function');
			$scope.contacts = data;
			console.log(data);
			}).error(function(data){
				console.log('Error ' + data);
		});
	};
}]);
