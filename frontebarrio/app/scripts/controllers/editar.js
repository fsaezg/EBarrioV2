'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:EditarCtrl
 * @description
 * # EditarCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('EditarCtrl', function () {
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
