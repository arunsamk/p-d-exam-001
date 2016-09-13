eApplication.directive('fileModel', ['$parse', function($parse){
	return{
		restrict: 'A',
		link: function(scope, element, attrs){
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			/*console.log('Model ' + model);
			console.log('ModelSetter ' + modelSetter);*/
			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]);
				});				
			});
		}
	};
}]);