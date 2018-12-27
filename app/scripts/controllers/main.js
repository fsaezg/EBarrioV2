'use strict';

/**
 * @ngdoc function
 * @name frontEbarrioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEbarrioApp
 */
angular.module('frontEbarrioApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  });
