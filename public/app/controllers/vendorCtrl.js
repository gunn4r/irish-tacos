angular.module('manage.irishtacos')
  .controller('vendorCtrl', function($scope){

  //Setting up UI Grid
  var uiGridColumnDefs = [
      {name: "ID", field: '_id'},
      {name: "Name", field: 'name'},
      {name: "Phone", field: 'phone'},
      {name: "Street", field: 'address.street'},
      {name: "City", field: 'address.city'},
      {name: "State", field: 'address.state'},
      {name: "Zip", field: 'address.zip'}
  ];

  $scope.gridOptions.columnDefs = uiGridColumnDefs;

  //Get our data!
  $scope.getData();

});
