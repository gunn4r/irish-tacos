var app = angular.module('manage.irishtacos');

app.controller('crudCtrl', function($scope, errService, dataService){

  $scope.toggleRightModal = false;
  $scope.crudAction = '';

  //UI Grid Options
  $scope.gridOptions = {
    enableSorting: true,
    enableFiltering: true,
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    multiSelect: false,
    modifierKeysToMultiSelect: false,
    noUnselect: false,
    onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope, function(row){ //This is what does the row selection and puts that rows data on the scope.
          if(row.isSelected) $scope.selectedRow = row.entity;
            else $scope.selectedRow = null;
        });
    }
  };

  $scope.getData = function(){
    dataService.getData($scope.state).then(function(response){
      $scope.gridOptions.data = response.data;
    });
  };

  //This is broadcast FROM crudModalDirective.js
  $scope.$on('dataAdded', function(){
    $scope.getData();
    $scope.selectedRow = null;
  });

  $scope.toggleCreate = function(){
    $scope.crudAction = 'Create';
    $scope.toggleRightModal = true;
  };

  $scope.toggleUpdate = function(data){
    $scope.crudAction = 'Update';
    $scope.toggleRightModal = true;
    $scope.$broadcast('dataToUpdate', data); //This is broadcast TO crudModalDirective.js
  };

  $scope.deleteData = function(state, id){
    swal({
      title: 'Are you sure?',
      text: 'This will PERMANENTLY delete this '+ $scope.state +'!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'BURN IT DOWN',
      closeOnConfirm: false,
      showLoaderOnConfirm: true
    },
    function(){
      dataService.delete(state, id)
        .then(
          function(response){
            swal({
              title: 'Deleted!',
              text: 'The user has been permanently deleted.',
              type: 'success',
              timer: 1000,
              showConfirmButton: false
            });
            $scope.getData();
            $scope.selectedRow = null;
          },
          function(error){ errService.error(error); });
    });
  };

});
