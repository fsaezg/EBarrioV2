'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:GraficoCtrl
 * @description
 * # GraficoCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('GraficoCtrl', function ($scope,$http,$timeout,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	   $http({
	   	method: 'GET',
	   	url:'https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoMes?q={"nombre":"Franco"}&apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'
	   }).then(function successCallback(response){
	   	$rootScope.posts = response.data
	   	$scope.colors = ['#45b7cd','#ff6384','#ff8e72'];
    	$scope.labels =['KWH','Costo $','Maximo Consumo KWH'];
    	$scope.data =[[28,5128, 180],
    	[]];
    	$scope.datasetOverride = [{
    		label:"Bar chart",
    		borderWidth: 1,
    		type: 'bar'
    	},
    	{
    		label:"Line chart",
    		borderWidth: 3,
    		hoverBackgroundColor:"rgba(255,99,132,0.4)",
    		hoverBorderColor: "rgba(255,99,132,1)",
    		type:'line'
    	}
    	];	  

	   },function errorCallback(response){

	   });
	   
	   var vm=this;
    	vm.menutemplate={
    	url:'views/menu.html'
    	};
    	
});
	    	
	

