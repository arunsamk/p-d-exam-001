eApplication.service('multipartForm', ['$http', function($http){
	this.uploadFileToUrl = function(file, uploadUrl){		
		var fd  = new FormData();
		/*for ( var key in data )
			fd.append(key, data[key]);	*/
			fd.append('file', file);
			console.log('UPLOADURL' + uploadUrl);
		$http.post(uploadUrl, fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }			
		}).success(function(){
			console.log('File upload to Url  Successful');
		}).error(function(){
			console.log('File upload to Url  not Successful');
		});
	};
}]);