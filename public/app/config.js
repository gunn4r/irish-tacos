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
        currentUser: function(userService, $state){
          return userService.getCurrentUser()
            .then(function(response){
              if(response.status !== 200) {
                alert('HERP DERP, ERROR ALERT!');
              } else {
                return response.data;
              }
            });
        }
      }
    })
    .state('dashboard', {
      parent: 'admin',
      url: 'dashboard',
      templateUrl: 'app/views/dashboardView.html'
    })
    .state('users', {
      views: {
        "": {
          templateUrl: 'app/views/usersView.html',
          controller: 'userCtrl'
        },
        crudModal: {
          templateUrl: 'app/templates/forms/userForm.html',
          controller: 'crudModalCtrl'
        }
      },
      parent: 'admin',
      url: 'users'
    });

  $urlRouterProvider.otherwise('/login');
});
