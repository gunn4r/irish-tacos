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
                return response.data;
              },
              function(error){
                errService.error(error);
              }
            );
        }
      }
    })

    .state('crud', {
      abstract: true,
      parent: 'admin',
      templateUrl: 'app/views/crudView.html',
      controller: 'crudCtrl'
    })

    .state('dashboard', {
      parent: 'admin',
      url: 'dashboard',
      templateUrl: 'app/views/dashboardView.html'
    })

    .state('vendors', {
      templateUrl: 'app/views/vendorsView.html',
      controller: 'vendorCtrl',
      parent: 'crud',
      url: 'vendors'
    })

    .state('users', {
      templateUrl: 'app/views/usersView.html',
      controller: 'userCtrl',
      parent: 'crud',
      url: 'users'
    });

  $urlRouterProvider.otherwise('/login');
});
