
//Factory to transfer value to qbank.js file
eApplication.factory('shareQuestionService', function ($rootScope) {
	var sharedQuestion = {};
	sharedQuestion.transferChoice = function(choice){
		this.choice = choice;
		//console.log('Value acquired in choice in factory ' + choice);
	};
	return sharedQuestion;
});
