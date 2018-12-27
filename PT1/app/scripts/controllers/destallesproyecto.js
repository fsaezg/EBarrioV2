'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:DestallesproyectoCtrl
 * @description
 * # DestallesproyectoCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('DestallesproyectoCtrl', function ($scope,$http,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    	$(document).ready(function() {
      //$(".dial").knob();
      $('.dial').knob({
        'min':0,
        'max':100,
        'width':250,
        'height':250,
        'displayInput':true,
        'fgColor':"#2a3496",
        'release':function(v) {$("p").text(v);},
        'readOnly':true
      });
    })
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
