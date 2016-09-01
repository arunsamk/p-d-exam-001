//'use strict';

/**
 * @ngdoc overview
 * @name examApp
 * @description
 * # examApp
 *
 * Main module of the application.
 */
var exampApplication = angular.module('examApp', [
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

exampApplication.controller('questionCtrl', ['$scope', '$http', function($scope, $http){

    //when landing on the page get all the rows in the collection
    $http.get('/api/questions').success(function(data){
      $scope.questions = data;
      console.log(data);
    }).error(function(data){
      console.log('Error' + data);
    });

    //when submitting the add form, send the text node api
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
