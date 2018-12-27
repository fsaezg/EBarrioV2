'use strict';

describe('Controller: ConsumoactualCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var ConsumoactualCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsumoactualCtrl = $controller('ConsumoactualCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsumoactualCtrl.awesomeThings.length).toBe(3);
  });
});
