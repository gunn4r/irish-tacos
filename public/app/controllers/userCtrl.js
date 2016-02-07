angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope, NgTableParams, userService){

  userService.getUsers().then(function(response){
    $scope.users = response.data;
  });

  });
