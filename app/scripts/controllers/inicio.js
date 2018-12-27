'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:InicioCtrl
 * @description
 * # InicioCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('InicioCtrl', function () {
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
      
    $('.slider').slider();
      // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');
      });
  });
