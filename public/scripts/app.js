//'use strict';

/**
 * @ngdoc overview
 * @name examApp
 * @description
 * # examApp
 *
 * Main module of the application.
 */
angular.module('examApp', [
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
        templateUrl:'views/contact.html',
        
        
    })
    .when('/about' , {
        templateUrl : 'views/aboutus.html'
    })
    .when('/article', {
        templateUrl : 'views/article.html'
    })
    .when('/job', {
        templateUrl : 'views/jobs.html'
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