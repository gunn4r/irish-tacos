angular.module('manage.irishtacos')
  .controller('userCtrl', function($scope, userService){

  $scope.crudAction = '';

  $scope.getUsers = function(){
    userService.getUsers().then(function(response){
      $scope.gridOptions.data = response.data;
    });
  };

  //This is broadcast FROM crudModalDirective.js
  $scope.$on('addNewUser', function(event, data){
    $scope.getUsers();
  });

  $scope.toggleCreateUser = function(){
    $scope.crudAction = 'Create';
    $scope.toggleRightModal = true;
  };

  $scope.toggleUpdateUser = function(user){
    $scope.crudAction = 'Update';
    $scope.toggleRightModal = true;
    $scope.$broadcast('userToUpdate', user); //This is broadcast TO crudModalDirective.js
  };

  //Deletes a Selected User
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
        .then(
          function(response){
            swal({
              title: 'Deleted!',
              text: 'The user has been permanently deleted.',
              type: 'success',
              timer: 1000,
              showConfirmButton: false
            });
            $scope.getUsers();
            $scope.selectedRow = null;
          },
          function(error){ errService.error(error); });
    });
  };





  //Setting up UI Grid
  var uiGridColumnDefs = [
      {name: "ID", field: '_id'},
      {name: "First Name", field: 'name.first'},
      {name: "Last Name", field: 'name.last'},
      {name: "Email", field: 'email'},
      {name: "Phone", field: 'phone'},
      {name: "Type", field: 'type'}
  ];

  //UI Grid Options
  $scope.gridOptions = {
    enableSorting: true,
    enableFiltering: true,
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    multiSelect: false,
    modifierKeysToMultiSelect: false,
    noUnselect: false,
    columnDefs: uiGridColumnDefs,
    onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope, function(row){ //This is what does the row selection and puts that rows data on the scope.
          if(row.isSelected) $scope.selectedRow = row.entity;
            else $scope.selectedRow = null;
        });
    }
  };

  //Get our users!
  $scope.getUsers();

});
