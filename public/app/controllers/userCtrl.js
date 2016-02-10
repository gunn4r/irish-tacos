angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope, userService){

  $scope.sidebarToggle.right = false;

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
      enableColResize: true,
      rowHeight: 40
  };

  //This is broadcast from crudModalCtrl.js
  $scope.$on('addNewUser', function(event, data){
    $scope.users.push(data);
    $scope.gridOptions.api.setRowData($scope.users);
    $scope.gridOptions.api.sizeColumnsToFit();
    $scope.sidebarToggle.right = false;
  });

});
