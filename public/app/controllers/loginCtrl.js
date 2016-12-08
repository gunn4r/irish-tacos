var app = angular.module('manage.irishtacos');

app.controller('loginCtrl', function($scope, loginService, $state){

	$scope.userLogin = function(){
		loginService.userLogin($scope.user)
			.then(function(response){
				$scope.loginSuccess = true;
				console.log(response);
				$state.go('dashboard');
			}, function(error){
				$scope.loginError = 'Invalid Username or Password.';
			});
	};

});
