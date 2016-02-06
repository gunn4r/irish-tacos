angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope, NgTableParams, userService){

    $scope.tableParams = new NgTableParams({
      page: 1,
      count: 20,
      sorting: { name: "asc" }
    }, {
      total: 0,
      getData: function($defer, params){
        userService.getUsers().success(function(result){
          $scope.tableParams.total(result.length);
          $defer.resolve(result);
        });
      }
    });

  });
