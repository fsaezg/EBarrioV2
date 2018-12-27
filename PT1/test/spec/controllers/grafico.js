'use strict';

describe('Controller: GraficoCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var GraficoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraficoCtrl = $controller('GraficoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GraficoCtrl.awesomeThings.length).toBe(3);
  });
});
