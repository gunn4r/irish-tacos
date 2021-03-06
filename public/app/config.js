//Configuring States (UI Router)
angular.module('manage.irishtacos')

.config(function($urlRouterProvider, $stateProvider){

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/views/loginView.html',
      controller: 'loginCtrl',
    })

    .state('admin', {
      abstract: true,
      url: '/',
      templateUrl: 'app/views/adminView.html',
      controller: 'adminCtrl',
      resolve: {
        currentUser: function(userService, errService, $state){
          return userService.getCurrentUser()
            .then(
              function(response){
                if(response.status == 200) { console.log(response); return response.data; }
                  else { consloe.log('Inside status 200 but with error'); errService.error(response); }
              },
              function(error){ 
                $state.go('login'); 
                errService.error(error); 
              }
            );
        }
      }
    })

    .state('dashboard', {
      parent: 'admin',
      url: 'dashboard',
      templateUrl: 'app/views/dashboardView.html'
    })

    .state('crud', {
      abstract: true,
      parent: 'admin',
      templateUrl: 'app/views/crudView.html',
      controller: 'crudCtrl'
    })

    .state('vendors', {
      controller: 'vendorCtrl',
      parent: 'crud',
      url: 'vendors'
    })

    .state('brands', {
      controller: 'brandCtrl',
      parent: 'crud',
      url: 'brands'
    })

    .state('inventoryitems', {
      controller: 'inventoryCtrl',
      parent: 'crud',
      url: 'inventory'
    })

    .state('users', {
      controller: 'userCtrl',
      parent: 'crud',
      url: 'users'
    });

  $urlRouterProvider.otherwise('/login');
});
