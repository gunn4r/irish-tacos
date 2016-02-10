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
  			url: '/api/user?_id=56b90ed8cae4720c34f6ad4e'
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

    this.addNewUser = function(newUser){
      return $http({
        method: 'POST',
        url: '/api/user',
        data: newUser
      });
    };

});


// .then(function(response){
//   return response.data;
// }, function(error){
//   return error;
// })
