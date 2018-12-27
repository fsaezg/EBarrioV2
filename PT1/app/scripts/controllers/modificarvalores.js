'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ModificarvaloresCtrl
 * @description
 * # ModificarvaloresCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('ModificarvaloresCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    

     $scope.update=function(){      
            $http.post("insert_valor.php", {
                'cargofijo':$scope.cargofijo,
                'valorkwh':$scope.valorkwh,
                'transporte':$scope.transporte
            }).then(function(response){
                    console.log("Data Inserted Successfully");
                    console.log($scope.cargofijo);
                    console.log($scope.valorkwh);
                    alert("datos ingresados");
                },function(error){
                    alert("Sorry! Data Couldn't be inserted!");
                    console.error(error);

                });
            }
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
