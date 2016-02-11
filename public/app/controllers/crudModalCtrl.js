angular.module('manage.irishtacos')
  .controller('crudModalCtrl', function($scope, $rootScope, userService){

  $scope.addNewUser = function(newUser){
    userService.addNewUser(newUser).then(function(response){
      $rootScope.$broadcast('addNewUser', response.data);
      $scope.newUser = {};
    }, function(err){
      console.error(err);
      alert('HERP DERP ERROR ALERP');
    });
  };

  $scope.$on('modalClose', function(){
    $scope.newUser = {};
  });

});
