angular.module('manage.irishtacos')
.controller('crudCtrl', function($scope, errService, dataService, $state){

  $scope.toggleRightModal = false;
  $scope.crudAction = '';
  $scope.selectedRow = null;

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
          if(row.isSelected) {
            $scope.selectedRow = row.entity;
            $scope.$broadcast('dataToUpdate', row.entity);
          } else {
            $scope.selectedRow = null;
            $scope.$broadcast('dataToUpdate', null);
            $scope.toggleRightModal = false;
          }
        });
    }
  };

  //If on a state that needs the brands, go get it.
  if($state.current.name === 'inventoryitems'){
    dataService.getData('brand').then(function(response){
      $scope.$broadcast('brands', response.data);
    },function(error){errService.error(error);});
  }

  $scope.getData = function(){
    dataService.getData($state.current.name.slice(0, $state.current.name.length-1)).then(function(response){
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
    $scope.$broadcast('dataToUpdate', null); //This is broadcast TO crudModalDirective.js
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
              text: 'The ' + state + ' has been permanently deleted.',
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
