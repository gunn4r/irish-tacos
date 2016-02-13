angular.module('manage.irishtacos')
  .controller('inventoryCtrl', function($scope){

  //Setting up UI Grid
  var uiGridColumnDefs = [
      {name: "Stock", field: 'stock'},
      {name: "Name", field: 'name'},
      {name: "Brand", field: 'brand.name'},
      {name: "Unit Qty", field: 'quantity'},
      {name: "Unit", field: 'units'},
      {name: "Type", field: 'type'},
      {name: "Category", field: 'category'},
      {name: "Par Level", field: 'parLevel'},
      {name: "ID", field: '_id'},
  ];

  $scope.gridOptions.columnDefs = uiGridColumnDefs;

  //Get our data!
  $scope.getData();

});
