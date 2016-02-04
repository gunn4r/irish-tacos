var app = angular.module('manage.irishtacos');

app.controller('loginCtrl', function($scope, userService, $state){

	$scope.userLogin = function(user){
		userService.userLogin(user)
			.then(function(response){
				$scope.loginSuccess = true;
				console.log(response);
				//$state.go('admin');
			}, function(error){
				$scope.loginError = 'Invalid Username or Password.';
			});
	};

});





app.service('userService', function($http){
	this.userLogin = function(user){
	 	return $http({
			method: 'POST',
			url: '/api/login',
			data: user
		});
	};


	this.getCurrentUser = function(){
		return $http({
			method: 'GET',
			url: '/api/me'
		}).then(function(response){
			return response.data;
		}, function(error){
			return error;
		});
	};
});
