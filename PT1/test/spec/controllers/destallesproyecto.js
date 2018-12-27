'use strict';

describe('Controller: DestallesproyectoCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var DestallesproyectoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DestallesproyectoCtrl = $controller('DestallesproyectoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DestallesproyectoCtrl.awesomeThings.length).toBe(3);
  });
});
