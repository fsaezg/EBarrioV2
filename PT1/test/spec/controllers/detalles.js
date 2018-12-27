'use strict';

describe('Controller: DetallesCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var DetallesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetallesCtrl = $controller('DetallesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetallesCtrl.awesomeThings.length).toBe(3);
  });
});
