var app = angular.module('manage.irishtacos');

app.service('errService', function(){
  this.error = function(err){
    var message  = err.data.message;
    var status = 'Message: ' + err.status + ' || Status:' + err.statusText;
    console.error(message, status);

    swal({
      title: 'ERROR!',
      text: '<p>Something went wrong...</p><br><strong>' + message + '</strong><br>Code: [ <strong>' + status + '</strong> ]',
      type: 'error',
      html: true
    });
  };
});
