angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope, userService){

  userService.getUsers().then(function(response){
    $scope.users = response.data;
    $scope.gridOptions.api.setRowData($scope.users);
    $scope.gridOptions.api.sizeColumnsToFit();
  });

  var agGridColumnDefs = [
      {headerName: "ID", field: '_id'},
      {headerName: "First Name", field: 'name.first'},
      {headerName: "Last Name", field: 'name.last'},
      {headerName: "Email", field: 'email'},
      {headerName: "Phone", field: 'phone'},
      {headerName: "Creation Date", field: 'meta.createdAt'},
      {headerName: "Active", field: 'meta.active'},
      {headerName: "Type", field: 'type'}
  ];

  $scope.gridOptions = {
      columnDefs: agGridColumnDefs,
      enableFilter: true,
      enableSorting: true,
      rowSelection: 'single',
      enableColResize: true
  };

});
