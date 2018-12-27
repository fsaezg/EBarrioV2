'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:UbicacionCtrl
 * @description
 * # UbicacionCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('UbicacionCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    	vm.menutemplate={
    	url:'views/menu.html'
    	};
      $('.map-container')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
  });
