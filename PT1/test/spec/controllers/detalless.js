'use strict';

describe('Controller: DetallessCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var DetallessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetallessCtrl = $controller('DetallessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetallessCtrl.awesomeThings.length).toBe(3);
  });
});
