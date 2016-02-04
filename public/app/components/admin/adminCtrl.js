var app = angular.module('manage.irishtacos');

app.controller('adminCtrl', function($scope, user){
  console.log(user);
  $scope.me = user;
});
