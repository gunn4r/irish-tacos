var app = angular.module('manage.irishtacos');

app.service('dataService', function($http){

  	this.getData = function(model, id){
      if(id){
        return $http({
          method: 'GET',
          url: '/api/' + model + '/?id=' + id
        });
      }
      return $http({
        method: 'GET',
        url: '/api/' + model
      });
    };

    this.create = function(model, data){
      return $http({
        method: 'POST',
        url: '/api/' + model,
        data: data
      });
    };

    this.delete = function(model, id){
      return $http({
        method: 'DELETE',
        url: '/api/' + model +'/?id=' + id
      });
    };

    this.update = function(model, data){
      return $http({
        method: 'PUT',
        url: '/api/'+ model +'/?id=' + data._id,
        data: data
      });
    };



});
