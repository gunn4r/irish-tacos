var app = angular.module('manage.irishtacos');

app.service('userService', function($http){

  	this.getCurrentUser = function(){
  		return $http({
  			method: 'GET',
  			url: '/api/currentuser'
  		});
  	};

    this.getDummyUser = function(){
  		return $http({
  			method: 'GET',
  			url: '/api/user?_id=56b6deb55480fee4107a22f9'
  		});
  	};

    this.getUsers = function(userId){
      if(userId){
        return $http({
          method: 'GET',
          url: '/api/user/?_id=' + userId
        });
      }
      return $http({
        method: 'GET',
        url: '/api/user'
      });
    };
});


// .then(function(response){
//   return response.data;
// }, function(error){
//   return error;
// })
