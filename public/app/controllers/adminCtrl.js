angular.module('manage.irishtacos')

.controller('adminCtrl', function($scope, currentUser, loginService){

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


  $scope.state = $scope.$state.current.name.slice(0, $scope.$state.current.name.length-1);

});
