angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope){

  //Setting up UI Grid
  var uiGridColumnDefs = [
      {name: "ID", field: '_id'},
      {name: "First Name", field: 'name.first'},
      {name: "Last Name", field: 'name.last'},
      {name: "Email", field: 'email'},
      {name: "Phone", field: 'phone'},
      {name: "Type", field: 'type'}
  ];

  $scope.gridOptions.columnDefs = uiGridColumnDefs;

  //Get our data!
  $scope.getData();

});
