'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:ListaproyectosCtrl
 * @description
 * # ListaproyectosCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('ListaproyectosCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
