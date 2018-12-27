'use strict';

describe('Controller: CrearproyectoCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var CrearproyectoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearproyectoCtrl = $controller('CrearproyectoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrearproyectoCtrl.awesomeThings.length).toBe(3);
  });
});
