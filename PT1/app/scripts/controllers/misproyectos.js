'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:MisproyectosCtrl
 * @description
 * # MisproyectosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('MisproyectosCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.importar=function(){
  $http.get("misproyectos.php")
  .then(function (response){
      $scope.proyecto = response.data.records;});

     
   }

   var vm=this;
    vm.menutemplate={
    url:'views/menu.html'
    };
  });
