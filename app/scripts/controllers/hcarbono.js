'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:HcarbonoCtrl
 * @description
 * # HcarbonoCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('HcarbonoCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
     $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  });
