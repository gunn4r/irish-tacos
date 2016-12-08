angular.module('manage.irishtacos')

.controller('adminCtrl', function($scope, currentUser, loginService, $state){

  $scope.currentUser = currentUser;

  $scope.logout = function userLogout(){
    return loginService.userLogout()
      .then(
        function(response){
          $state.go('login');
        },
        function(error){
          console.log(error);
        });
  };


  $scope.state = $scope.$state.current.name.slice(0, $scope.$state.current.name.length-1);

});
