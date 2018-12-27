'use strict';

describe('Controller: ExitoCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var ExitoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExitoCtrl = $controller('ExitoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExitoCtrl.awesomeThings.length).toBe(3);
  });
});
