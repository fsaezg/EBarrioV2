'use strict';

describe('Controller: InforproyectoCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var InforproyectoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InforproyectoCtrl = $controller('InforproyectoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InforproyectoCtrl.awesomeThings.length).toBe(3);
  });
});
