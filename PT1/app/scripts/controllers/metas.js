'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:MetasCtrl
 * @description
 * # MetasCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('MetasCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.nombre="Proyectos";
    $scope.nuevoProyecto={};
    $scope.proyectos=[{
      "id": 1, 
      "anio": "2017", 
      "mes":"06", 
      "consumo_actual": 203, 
      "meta_consumo": 180, 
      "ahorro": 11,
      "tipo": "Mejoramiento de entorno."
    }];
    $scope.agregarProyecto= function(){
      $scope.proyectos.push($scope.nuevoProyecto);
      $scope.nuevoProyecto={};
    };
    var ctrl = this;
    
    ctrl.chartData = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];
    ctrl.chartColors = ["#31C0BE", "#c7254e", "#98a0d3"];
    ctrl.myFormatter = function(input) {
      return input + '%';
    };
    // $http({
    //   method: 'GET',
    //   url:'/metas.json'
    //  }).then(function successCallback(response){
    //   $scope.posts = response.data

    //  },function errorCallback(response){

    //  });
    var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
    // $http({
    //   method: 'GET',
    //   url:'https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoMes?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'
    //  }).then(function successCallback(response){
    //   $scope.posts = response.data

    //  },function errorCallback(response){

    //  });
  });
