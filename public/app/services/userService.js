var app = angular.module('manage.irishtacos');

app.service('userService', function($http){

  	this.getCurrentUser = function(){
  		return $http({
  			method: 'GET',
        url: '/api/user/?id=56b90ed8cae4720c34f6ad4e'
        //NOTE: Uncomment for working LOGIN
        //url: '/api/currentuser'
  		});
  	};

    this.getUsers = function(userId){
      if(userId){
        return $http({
          method: 'GET',
          url: '/api/user/?id=' + userId
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

    this.deleteUser = function(userId){
      return $http({
        method: 'DELETE',
        url: '/api/user/?id=' + userId
      });
    };

});


// .then(function(response){
//   return response.data;
// }, function(error){
//   return error;
// })
