angular.module('manage.irishtacos')
  .controller('brandCtrl', function($scope){

  //Setting up UI Grid
  var uiGridColumnDefs = [
      {name: "ID", field: '_id'},
      {name: "Name", field: 'name'},
  ];

  $scope.gridOptions.columnDefs = uiGridColumnDefs;

  //Get our data!
  $scope.getData();

});
