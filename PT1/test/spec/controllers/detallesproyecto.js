'use strict';

describe('Controller: DetallesproyectoCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var DetallesproyectoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetallesproyectoCtrl = $controller('DetallesproyectoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetallesproyectoCtrl.awesomeThings.length).toBe(3);
  });
});
