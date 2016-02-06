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
  			url: '/api/users?_id=56b3913f02e149ec2f5c8850'
  		});
  	};

    this.getUsers = function(userId){
      if(userId){
        return $http({
          method: 'GET',
          url: '/api/users/?_id=' + userId
        });
      }
      return $http({
        method: 'GET',
        url: '/api/users'
      });
    };
});


// .then(function(response){
//   return response.data;
// }, function(error){
//   return error;
// })
