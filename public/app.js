var app = angular.module('manage.irishtacos', ['ui.router']);

//Configuring States (UI Router)
app.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/components/login/loginView.html',
      controller: 'loginCtrl',
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/components/admin/adminView.html',
      controller: 'adminCtrl'
      // resolve: {
      //   user: function(userService, $state){
      //     return userService.getCurrentUser()
      //     .then(function(response){
      //       console.log(response);
      //       // if(response.status !== 200) {
      //       //   console.error(response.data, response.status, response.statusText);
      //       // } else {
      //       //   return response.data;
      //       // }
      //     }
      //   );
      //   }
      // }
    })
    .state('admin.users', {
      url: '/users',
      template: '',
      controller: 'adminUsersCtrl',
    });

  $urlRouterProvider.otherwise('/login');
});






//Debugging State Changes
app.run(function($rootScope, $state, $stateParams, $log){
  //Add $state and $stateparams to the $rootScope when the app is run.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $log.debug('Booyah! Successfully changed states');
    // $log.debug('event', event);
    // $log.debug('toState', toState);
    // $log.debug('toParams', toParams);
    // $log.debug('fromState', fromState);
    // $log.debug('fromparams', fromParams);
  });

  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
    $log.error('SHIT! The request state was not found: ', unfoundState);
  });

  $rootScope.$on('stateChangeError', function(event, toState, toParams, fromState, fromparams, error){
    $log.debug('NOOOO! An error occurred while changing states: ', error);
    // $log.debug('event', event);
    // $log.debug('toState', toState);
    // $log.debug('toParams', toParams);
    // $log.debug('fromState', fromState);
    // $log.debug('fromparams', fromParams);
  });
});
