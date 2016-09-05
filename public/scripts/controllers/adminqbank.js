angular.module('examApp').controller('questionCtrl', ['$scope', '$http', function($scope, $http){

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
      //console.log('Inside list question funtion');
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