'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:PostularCtrl
 * @description
 * # PostularCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('PostularCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.update=function(){      
            $http.post("postular.php", {
                'rut':$scope.rut,
                'idproyecto':$scope.idproyecto
            }).then(function(response){
                    console.log("Data Inserted Successfully");
                    console.log($scope.rut);
                    console.log($scope.idproyecto);
                    alert("datos ingresados");
                },function(error){
                    alert("Sorry! Data Couldn't be inserted!");
                    console.error(error);

                });
            }

    $(document).ready(function() {
    $('select').material_select();
  });
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
