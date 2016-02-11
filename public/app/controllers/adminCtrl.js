var app = angular.module('manage.irishtacos');

app.controller('adminCtrl', function($scope, currentUser, loginService){

  $scope.currentUser = currentUser;

  $scope.logout = function userLogout(){
    return loginService.userLogout()
      .then(
        function(response){
          console.log(response);
        },
        function(error){
          console.log(error);
        });
  };

  $scope.sidebarToggle = { right: false };

  $scope.modalClose = function(){
    $scope.$broadcast('modalClose');
    $scope.sidebarToggle.right = false;
  };

});
