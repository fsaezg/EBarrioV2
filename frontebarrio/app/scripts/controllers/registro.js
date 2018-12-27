'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('RegistroCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.usuario = {
            nombre: "",
            apellido:"",
            contrasena:"",
            correo:""
        };
    console.log($scope.usuario.apellido);    
    
    $scope.insert=function(){   
        var result=confirm("¿Desea registrarse en la plataforma?");
        if (result) {   
        	console.log($scope.usuario.nombre);
            $http.post("insert_user.php", {
                'nombre':$scope.usuario.nombre,
                'apellido':$scope.usuario.apellido,
                'contrasena':$scope.usuario.contrasena,
                'correo':$scope.usuario.correo
            }).then(function(data, status, headers, config){
                    console.log("Data Inserted Successfully");
                    console.log(data.data);
                    console.log($scope.nombre);
                    console.log($scope.apellido);
                    console.log($scope.correo);
                    alert("Usuario Agregado con exito");
                    window.location.href='#!/';
                },function(error){
                    alert("Lo lamentamos! Tenemos problemas para guardar tu usuario, intenta mas tarde");
                     });
}
  }});
