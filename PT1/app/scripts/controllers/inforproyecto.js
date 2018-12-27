'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:InforproyectoCtrl
 * @description
 * # InforproyectoCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
// .factory('Proyectos', ['$resource', function ($resource) {
//         return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
//             update: {method: "PUT", params: {id: "@_id"}}
//         })
//     }])
  .controller('InforproyectoCtrl', function ($scope,$http,Proyectos,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


         $scope.photos = [
{src: 'images/1.jpg', desc: 'Image 01'},
{src: 'images/2.jpg', desc: 'Image 02'},
{src: 'images/3.jpg', desc: 'Image 03'},
{src: 'images/4.jpg', desc: 'Image 04'},
{src: 'images/5.jpg', desc: 'Image 05'},
{src: 'images/6.jpg', desc: 'Image 06'}
];
// initial image index
$scope._Index = 0;
// if a current image is the same as requested image
$scope.isActive = function (index) {
return $scope._Index === index;
};
// show prev image
$scope.showPrev = function () {
$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
};
// show next image
$scope.showNext = function () {
$scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
};
// show a certain image
$scope.showPhoto = function (index) {
$scope._Index = index;
};
 var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };

  });
