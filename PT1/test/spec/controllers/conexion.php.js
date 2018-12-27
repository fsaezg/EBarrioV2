'use strict';

describe('Controller: ConexionPhpCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var ConexionPhpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConexionPhpCtrl = $controller('ConexionPhpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConexionPhpCtrl.awesomeThings.length).toBe(3);
  });
});
