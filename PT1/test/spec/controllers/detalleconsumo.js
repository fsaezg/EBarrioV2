'use strict';

describe('Controller: DetalleconsumoCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var DetalleconsumoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetalleconsumoCtrl = $controller('DetalleconsumoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetalleconsumoCtrl.awesomeThings.length).toBe(3);
  });
});
