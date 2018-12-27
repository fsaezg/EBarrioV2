'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:DetallecasillaCtrl
 * @description
 * # DetallecasillaCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('DetallecasillaCtrl', function () {
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
