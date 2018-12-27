'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:CrearproyectoCtrl
 * @description
 * # CrearproyectoCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
 .factory('Proyectos', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('CrearproyectoCtrl', function ($scope,$http,Proyectos,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
    var id = $route.id;

        Proyectos.get({id: id}, function (data) {
            $scope.proyecto = data.response;
        })

        $scope.remove = function (id) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        };

        $scope.settings = {
            pageTitle: "Agregar proyecto",
            action: "Agregar"
        };

        $scope.proyecto = {
            idproyecto: "",
            razonsocial:"",
            rutsocial:"",
            organizacion:"",
            fechasolicitud:"",
            nombre:"",
            tarifa:"",
            destinatario:"",
            beneficiariodirecto:"",
            beneficiarioindirecto:"",
            dimensiones:"",
            duracion:"",
            region: "",
            estado: "",
            meta:"",
            dinero:"",
            aporte:""
        };
        console.log("estoy antes del submit");

        // $scope.submit = function (proyecto) {
        // 	var result = confirm("Se agregará un nuevo proyecto, ¿Desea continuar?");
        //     console.log("hola estoy antes del if");
        //   if (result) {
        //   	console.log("hola entre al if");
        //     Proyectos.save({proyecto: $scope.proyecto}).$promise.then(function (data) {
        //     	console.log("voy a agregar un proyecto");
        //         if (data.response) {
        //         	console.log("estoy agregando el proyecto");
        //             angular.copy({}, $scope.proyecto);
        //             $scope.settings.success = "El proyecto ha sido creado correctamente!";
        //             alert("El proyecto ha sido creado correctamente!");
        //         }
        //     })
        // } console.log("hola sali del if");}
        // console.log("hola sali del submit");
        
        $scope.insert=function(){   
        var result=confirm("¿Desea postular el proyecto?");
        if (result) {   
            $http.post("insert.php", {
                'razonsocial':$scope.razonsocial,
                'rutsocial':$scope.rutsocial,
                'organizacion':$scope.organizacion,
                'telefono':$scope.telefono,
                'usuario':$scope.usuario,
                'nombre':$scope.nombre,
                'tarifa':$scope.tarifa,
                'destinatario':$scope.destinatario,
                'beneficiariodirecto':$scope.beneficiariodirecto,
                'beneficiarioindirecto':$scope.beneficiarioindirecto,
                'dimensiones':$scope.dimensiones,
                'duracion':$scope.duracion,
                'region':$scope.region,
                'meta':$scope.meta,
                'dinero':$scope.dinero,
                'aporte':$scope.aporte,
                'manodeobra':$scope.manodeobra,
                'materiales':$scope.materiales

            }).then(function(data, status, headers, config){
                    console.log("Data Inserted Successfully");
                    console.log(data.data);
                    console.log($scope.razonsocial);
                    console.log($scope.rutsocial);
                    console.log($scope.organizacion);
                    console.log($scope.nombre);
                    console.log($scope.tarifa);
                    alert("Proyecto Postulado con exito");
                    window.location.href='#!/inicio';
                },function(error){
                    alert("Lo lamentamos! Tenemos problemas para guardar tu proyecto, intenta mas tarde");
                     });
}  
  } 
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });


});
//controlaodor que permite subir imagenes al servidor 
  