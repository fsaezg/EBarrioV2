'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:CasillaproyectosCtrl
 * @description
 * # CasillaproyectosCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .factory('Proyectos', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('CasillaproyectosCtrl', function (Proyectos,$scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
    Proyectos.get(function (data) {
            $scope.proyectos = data.response;
        })
    $scope.mostrar=function(hola){
      if(hola="Postulacion fase 1"){
        return true;
      }
      else{
        return false;
      }
    }

        $scope.remove = function (id) {
          var result = confirm("¿Seguro que quiere eliminar este proyecto?");
    if (result) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        }}
         $scope.update = function (id) {
          var result = confirm("¿Seguro que quiere aprobar este proyecto?");
    if (result) {
            $http.post("Estado.php", {
                'id':id
            }).then(function(data, status, headers, config){
                    console.log("Data Inserted Successfully");
                    console.log(data.data);
                    alert("Proyecto aprobado con exito");
                    window.location.href='#!/inicio';
                },function(error){
                    alert("Lo lamentamos! Tenemos problemas para guardar tu preferencia, intenta mas tarde");
                     });
}
        }
  });

