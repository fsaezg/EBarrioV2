'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:ProyectosCtrl
 * @description
 * # ProyectosCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('ProyectosCtrl', function () {
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
