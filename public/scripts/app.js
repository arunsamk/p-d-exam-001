//'use strict';

/**
 * @ngdoc overview
 * @name examApp
 * @description
 * # examApp
 *
 * Main module of the application.
 */
var examApplication = angular.module('examApp', [
    'ngResource',
    'ngRoute'   
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    .when('/contact', {
        templateUrl:'views/contact.html'               
    })
    .when('/about' , {
        templateUrl : 'views/aboutus.html'
    })
    .when('/article', {
        templateUrl : 'views/article.html'
    }).when('/job', {
        templateUrl : 'views/jobs.html'
    }).when('/addquest', {
        templateUrl: 'views/addquestion.html'        
    })
    .when('/questionbank',{ templateUrl: 'views/questionbank.html', controller: 'qbankCtrl'})
    .when('/logadmin', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    })
   /*when('/profile', {
        templateUrl : 'modalContainer',
        controller : 'ProfileModalCtrl'
    })*/      
.otherwise({
        redirectTo: '/'
      });     
  });
/*app.controller('ProfileModalCtrl', function($scope, $modal) {
    $modal.open({templateUrl:'modal.html'});
});
*/

examApplication.controller('loginCtrl',['$scope', '$http', function($scope, $http){

    $http.get('/logadmin').success(function(data){

    });
}]);

examApplication.controller('questionCtrl', ['$scope', '$http', function($scope, $http){

    //when landing on the page get all the rows in the collection
    $http.get('/api/questions').success(function(data){
      $scope.questions = data;
      console.log(data);
    }).error(function(data){
      console.log('Error' + data);
    });

    //when submitting the form, the question gets added in the collection
    $scope.createQuestion = function(){
      $http.post('/api/questions', $scope.formData).success(function(data){
        $scope.formData = {};
        $scope.questions = data;
        console.log(data);      
      }).error(function(data){
        console.log('Error :' + data);
      });

    };

    // Conditional Listing
    $scope.listQuestions = function(){
      var parameters = {
        QuestCateg: $scope.formData.QuestCateg,
        QuestDCateg: $scope.formData.QuestDCateg
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

//var qbankPopulate = angular.module('examApp', ['ngRoute', 'ngResource']);

examApplication.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.rQuestion = function(){
    $location.path('/questionbank');
    console.log('Inside R Function');
    var parameter = {
      QuestCateg: 'R'
    };
    var config = {
      param: parameter
    };
    $http.get('/api/questions', config).sucess(function(data){
      $scope.questions = data;
      console.log('Successful get request with data pop');
    }).error(function(data){
      console.log('Error' + data);
    });
  };
}]);