angular.module('manage.irishtacos')

	.service('loginService', function($http){

		this.userLogin = function(user){
		 	return $http({
				method: 'POST',
				url: '/api/login',
				data: user
			});
		};

		this.userLogout = function(){
			return $http.get('/api/logout');
		};

	});
