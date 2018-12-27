'use strict';

describe('Controller: ConsumodiarioCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var ConsumodiarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsumodiarioCtrl = $controller('ConsumodiarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsumodiarioCtrl.awesomeThings.length).toBe(3);
  });
});
