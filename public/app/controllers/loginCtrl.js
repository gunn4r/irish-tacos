var app = angular.module('manage.irishtacos');

app.controller('loginCtrl', function($scope, loginService, $state){

	$scope.userLogin = function(user){
		$state.go('dashboard');
		// NOTE: UNCOMMENT FOR WORKING LOGIN
		// loginService.userLogin(user)
		// 	.then(function(response){
		// 		$scope.loginSuccess = true;
		// 		// console.log(response);
		// 		//$state.go('admin');
		// 	}, function(error){
		// 		$scope.loginError = 'Invalid Username or Password.';
		// 	});
	};

});
