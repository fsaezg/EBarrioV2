'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:DetallesCtrl
 * @description
 * # DetallesCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('DetallesCtrl', function () {
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
