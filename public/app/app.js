agGrid.initialiseAgGridWithAngular1(angular);

var app = angular.module('manage.irishtacos', [
  'ui.router',
  'agGrid'
]);


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
    $log.error('The request state was not found: ', unfoundState);
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
