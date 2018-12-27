'use strict';

describe('Controller: IngresoconsumoCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var IngresoconsumoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngresoconsumoCtrl = $controller('IngresoconsumoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IngresoconsumoCtrl.awesomeThings.length).toBe(3);
  });
});
