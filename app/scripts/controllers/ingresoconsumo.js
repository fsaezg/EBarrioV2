'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:IngresoconsumoCtrl
 * @description
 * # IngresoconsumoCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('IngresoconsumoCtrl', function ($scope,$http,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
    // $scope.uploadFiles = function(files, errFiles) {
    //     $scope.files = files;
    //     $scope.errFiles = errFiles;
    //     angular.forEach(files, function(file) {
    //         file.upload = Upload.upload({
    //             url: 'https:localhost:8080/consumo',
    //             data: {file: file}
    //         });

    //         file.upload.then(function (response) {
    //             $timeout(function () {
    //                 file.result = response.data;
    //             });
    //         }, function (response) {
    //             if (response.status > 0)
    //                 $scope.errorMsg = response.status + ': ' + response.data;
    //         }, function (evt) {
    //             file.progress = Math.min(100, parseInt(100.0 * 
    //                                      evt.loaded / evt.total));
    //         });
    //     });
    // }
    //  $scope.uploadPic = function(file) {
    // file.upload = Upload.upload({
    //   url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
    //   data: {username: $scope.username, file: file},
    // });

    // file.upload.then(function (response) {
    //   $timeout(function () {
    //     file.result = response.data;
    //   });
    // }, function (response) {
    //   if (response.status > 0)
    //     $scope.errorMsg = response.status + ': ' + response.data;
    // }, function (evt) {
    //   // Math.min is to fix IE which reports 200% sometimes
    //   file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    // });
    // }

    $scope.calcular=function(mes1,mes2,mes3,mes4,mes5,mes6,porcentaje){
    	$rootScope.promedio=(mes1+mes2+mes3+mes4+mes5+mes6)/6;
    	$rootScope.ahorro=$rootScope.promedio*(porcentaje/100);
    	$rootScope.consumo=($rootScope.promedio-$rootScope.ahorro);
        $rootScope.valorprom=$rootScope.promedio*(137);
        $rootScope.valorahorro=$rootScope.ahorro*(137,6);
        $rootScope.valorconsumo=$rootScope.consumo*(137,6);
    	
    }

        $scope.insert=function(){   
        var result=confirm("¿Desea Ingresar Consumo?");
        if (result) {   
            $http.post("insert_consumo.php", {
                'ncliente':$scope.ncliente,
                'distribuidora':$scope.distribuidora,
                'usuario':$scope.usuario,
                'direccion':$scope.direccion,
                'nmedidor':$socpe.nmedidor,
                'mes_uno':$scope.mes_uno,
                'consumo_uno':$scope.consumo_uno,
                'boleta_uno':$scope.boleta_uno,
                'mes_dos':$scope.mes_dos,
                'consumo_dos':$scope.consumo_dos,
                'boleta_dos':$scope.boleta_dos,
                'mes_tres':$scope.mes_tres,
                'consumo_tres':$scope.consumo_tres,
                'boleta_tres':$scope.boleta_tres,
                'mes_cuatro':$scope.mes_cuatro,
                'consumo_cuatro':$scope.consumo_cuatro,
                'boleta_cuatro':$scope.boleta_cuatro,
                'mes_cinco':$scope.mes_cinco,
                'consumo_cinco':$scope.consumo_cinco,
                'boleta_cinco':$scope.boleta_cinco,
                'mes_seis':$scope.mes_seis,
                'consumo_seis':$scope.consumo_seis,
                'boleta_seis':$scope.boleta_seis
            }).then(function(data, status, headers, config){
                    console.log("Data Inserted Successfully");
                    console.log(data.data);
                    console.log($scope.usuario);
                    console.log($scope.mes_seis);
                    console.log($scope.mes_cinto);
                    console.log($scope.mes_cuatro);
                    console.log($scope.mes_tres);
                    alert("Consumo Ingresado con exito");
                    window.location.href='#!/inicio';
                },function(error){
                    alert("Lo lamentamos! Tenemos problemas para guardar tu consumo, intenta mas tarde");
                     });
}  
  } 
    	
  });

