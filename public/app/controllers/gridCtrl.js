var app = angular.module('manage.irishtacos');

app.controller('gridCtrl', function($scope){

  // userService.getUsers().then(function(response){
  //   $scope.users = response.data;
  //   $scope.gridOptions.api.setRowData($scope.users);
  //   $scope.gridOptions.api.sizeColumnsToFit();
  // });

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
      // onReady: loadRowData,
      columnDefs: agGridColumnDefs,
      enableFilter: true,
      enableSorting: true,
      rowSelection: 'single',
      enableColResize: true,
      onCellClicked: function(cell) {
          console.log('cell clicked');
      },
      onCellValueChanged: cellChanged,
      onRowSelected: selectionChanged
  };



  function selectionChanged(row) {
      console.log('Row selected: ', row.node.data);
  }

  function cellChanged(changedObj) {
      console.log('Cell changed: New Value = ' + changedObj.newValue + ', Old Value = ' + changedObj.oldValue);
  }

});
