'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
.factory('Usuarios', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/participantes/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('UsuariosCtrl', function ($scope,$http,Usuarios,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  //   $scope.importar=function(){
  // $http.get("listar_usuario.php")
  // .then(function (response){
  //     $scope.usuario = response.data.records;});
  // }
  // console.log($scope.usuario);
  //  $scope.importar();
   var id = $route.id;

        Usuarios.get({id: id}, function (data) {
            $scope.usuario = data.response;
        })

        $scope.remove = function (id) {
            Usuarios.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        };

        $scope.settings = {
            pageTitle: "Agregar proyecto",
            action: "Agregar"
        };

        $scope.usuario = {
            idusuario: "",
            nombre: "",
            apellido: "",
            contrasena: "",
            correo: "",
            nacimiento: ""
        };
      

        $scope.submit = function () {
            Usuarios.save({usuario: $scope.usuario}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.usuario);
                    $scope.settings.success = "El proyecto ha sido creada correctamente!";
                }
            })
        };
 
     var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
    $('.map-container')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
  });
