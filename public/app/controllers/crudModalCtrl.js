angular.module('manage.irishtacos')
  .controller('crudModalCtrl', function($scope, $rootScope, userService, errService){

  $scope.sidebarToggle = { right: true };


  $scope.addNewUser = function(user){
    userService.addNewUser(user)
    .then(
      function(response){
        console.log(response);
        $rootScope.$broadcast('addNewUser', response.data);
        $scope.crudUser = {};
      },
      function(error){
        errService.error(error);
      }
    );
  };

  $scope.updateUser = function(user){

  };

  $scope.$on('modalClose', function(){
    $scope.crudUser = {};
  });

});
