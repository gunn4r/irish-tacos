var app = angular.module('manage.irishtacos');

app.controller('adminCtrl', function($scope, user, loginService){
  $scope.currentUser = user.shift();
  $scope.logout = function userLogout(){
    return loginService.userLogout()
      .then(function(response){console.log(response);}, function(error){console.log(error);});
  };
  $scope.sidebarToggle = { right: false };
});
