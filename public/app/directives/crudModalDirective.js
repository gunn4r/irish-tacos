angular.module('manage.irishtacos')
  .directive('crudModal', function(){

    return  {
        restrict: 'E',
        replace: true,
        templateUrl: '/app/templates/right-modal.html',
        scope: {
          state: '=',
          toggle: '=',
          action: '='
        },
        controller: function($scope, $rootScope, userService, errService, dataService){

          $scope.crudData = {};

          $scope.$on('dataToUpdate', function(event, data){
            $scope.crudData = data;
          });

          $scope.$on('brands', function(event, data){
            $scope.brands = data;
          });

          $scope.modalClose = function(){
            $scope.toggle = false;
            $scope.crudData = {};
          };

          $scope.crudAction = function(data){
            switch ($scope.action) {
              case 'Create':
                $scope.createData($scope.state, data);
                break;
              case 'Update':
                $scope.updateData($scope.state, data);
              break;
            }
          };


          $scope.createData = function(state, data){
            dataService.create(state, data)
            .then(
              function(response){
                $rootScope.$broadcast('dataAdded');
                $scope.modalClose();
              },
              function(error){ errService.error(error); }
            );
          };


          $scope.updateData = function(state, data){
            dataService.update(state, data).then(
              function(response){
                $rootScope.$broadcast('dataAdded');
                $scope.modalClose();
              },
              function(error){errService.error(error);}
            );
          };







          // $scope.crudUser = {};
          //
          // $scope.$on('userToUpdate', function(event, data){
          //   $scope.crudUser = data;
          // });
          //
          // $scope.modalClose = function(){
          //   $scope.toggle = false;
          //   $scope.crudUser = {};
          // };
          //
          // //////////////////////////////////////////
          // ////////// USERS ////////////////////////
          // /////////////////////////////////////////
          // $scope.crudAction = function(data){
          //   switch ($scope.action) {
          //     case 'Create':
          //       $scope.createUser(data);
          //       break;
          //     case 'Update':
          //       $scope.updateUser(data);
          //     break;
          //   }
          // };
          //
          // $scope.createUser = function(user){
          //   userService.addNewUser(user)
          //   .then(
          //     function(response){
          //       $rootScope.$broadcast('addNewUser', response.data);
          //       $scope.modalClose();
          //     },
          //     function(error){ errService.error(error); }
          //   );
          // };
          //
          // $scope.updateUser = function(user){
          //   userService.updateUser(user).then(
          //     function(response){
          //       $scope.modalClose();
          //     },
          //     function(error){errService.error(error);}
          //   );
          // };





        }//END CONTROLLER FUNCTION
    };//END DIRECTIVE RETURN OBJECT
  });
