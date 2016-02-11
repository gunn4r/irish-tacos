angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope, userService){

  $scope.sidebarToggle.right = false;

  userService.getUsers().then(function(response){
    $scope.users = response.data;
  });

  //This is broadcast from crudModalCtrl.js
  $scope.$on('addNewUser', function(event, data){
    $scope.gridOptions.data.push(data);
    $scope.sidebarToggle.right = false;
  });

$scope.deleteUser = function(userId){
  swal({
    title: 'Are you sure?',
    text: 'This will PERMANENTLY delete this user!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'BURN IT DOWN',
    closeOnConfirm: false,
    showLoaderOnConfirm: true
  },
  function(){
    userService.deleteUser(userId)
      .success(function(response){
        swal('Deleted!', 'The user has been permanently deleted.', 'success');
        userService.getUsers().then(function(response){
          $scope.users = response.data;
        });
      })
      .error(function(response){
        swal({
          title: 'ERROR!',
          text: 'Something went wrong. <pre>' + response + '</pre>',
          type: 'error',
          html: true
        });
      });
  });
};



});



/*OLD UI GRID CODE.... FUCK 3RD PARTY gridOptions

// var uiGridColumnDefs = [
//     {name: "ID", field: '_id'},
//     {name: "First Name", field: 'name.first'},
//     {name: "Last Name", field: 'name.last'},
//     {name: "Email", field: 'email'},
//     {name: "Phone", field: 'phone'},
//     {name: "Type", field: 'type'}
// ];
//
// $scope.gridOptions = {
//   enableSorting: true,
//   enableFiltering: true,
//   enableRowSelection: true,
//   enableRowHeaderSelection: false,
//   multiSelect: false,
//   modifierKeysToMultiSelect: false,
//   noUnselect: false,
//   onRegisterApi: function(gridApi){
//     $scope.gridApi = gridApi;
//   },
//   columnDefs: uiGridColumnDefs,
//   data: []
// };

// userService.getUsers().then(function(response){
//   $scope.users = response.data;
// });



//This is broadcast from crudModalCtrl.js
// $scope.$on('addNewUser', function(event, data){
//   $scope.users.push(data);
//   $scope.gridOptions.api.setRowData($scope.users);
//   $scope.gridOptions.api.sizeColumnsToFit();
//   $scope.sidebarToggle.right = false;
// });
//
// function crudRowSelection(row) {
//     $scope.rowSelected = true;
//     console.log('Row selected: ', row.node.data);
// }

*/




/* OLD AG GRID CODE:
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
    rowHeight: 40,
    angularCompileHeaders: true,
    onRowSelected: crudRowSelection
};

//This is broadcast from crudModalCtrl.js
$scope.$on('addNewUser', function(event, data){
  $scope.users.push(data);
  $scope.gridOptions.api.setRowData($scope.users);
  $scope.gridOptions.api.sizeColumnsToFit();
  $scope.sidebarToggle.right = false;
});

function crudRowSelection(row) {
    $scope.rowSelected = true;
    console.log('Row selected: ', row.node.data);
}
*/
