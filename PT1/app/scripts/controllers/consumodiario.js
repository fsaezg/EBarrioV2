'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ConsumodiarioCtrl
 * @description
 * # ConsumodiarioCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
// .factory('Proyectos', ['$resource', function ($resource) {
//         return $resource('http://localhost:8080/BarrioAPI/consumodiario/:id', {id: "@_id"}, {
//             update: {method: "PUT", params: {id: "@_id"}}
//         })
//     }])
  .controller('ConsumodiarioCtrl', function ($scope,$http,$route,Proyectos) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.importar=function(){
  $http.get("http://localhost:8080/BarrioAPI/consumodiario")
  .then(function (response){
      $scope.valor = response.data;});   
   }
   $scope.importar();
   console.log($scope.valor);
  // var id = $route.id;

  //       Proyectos.get({id: id}, function (data) {
  //           $scope.proyecto = data.response;
  //       })
  //       console.log($scope.proyecto);

$(document).ready(function() {
      //$(".dial").knob();
      $('.dial').knob({
        'min':0,
        'max':100,
        'width':250,
        'height':250,
        'displayInput':true,
        'fgColor':"#2a3496",
        'release':function(v) {$("p").text(v);},
        'readOnly':true
      });
       $('.line').knob({
        'min':0,
        'max':100,
        'width':250,
        'height':250,
        'displayInput':true,
        'fgColor':"#FF0000",
        'release':function(v) {$("p").text(v);},
        'readOnly':true
      });
    })

    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };

    
  });
