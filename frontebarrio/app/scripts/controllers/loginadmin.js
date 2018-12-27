'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:LoginadminCtrl
 * @description
 * # LoginadminCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('LoginadminCtrl', function ($scope,$http,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.insertdata=function(){
    console.log("triggered");
 $http.post("loginadmin.php",{'theusername':$scope.user, 'thepassword':$scope.pswd})


  .then(function(data, status, headers, config) {
        var mssg = data.MESSAGE;
        
        console.log(data);      
        if(data.data==='correct'){
          console.log(data.config.data.theusername);
          $rootScope.usuario=data.config.data.theusername;
          
          window.location.href = '/#!/casillaproyectos';
        } else {
          $scope.errorMsg = "Usuario o Contraseña no validos";
        }
      })
      // .error(function(data, status, headers, config) {
      //   $scope.errorMsg = 'Unable to LOGIN';
      // })
            
  }
  console.log($rootScope.usuario);
  $scope.user=$rootScope.usuario;
  console.log("usuario: ");
  console.log($scope.user);

  });
