'use strict';

describe('Controller: ListaproyectosCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var ListaproyectosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaproyectosCtrl = $controller('ListaproyectosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaproyectosCtrl.awesomeThings.length).toBe(3);
  });
});
