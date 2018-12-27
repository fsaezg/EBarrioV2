'use strict';

describe('Controller: MetasCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var MetasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MetasCtrl = $controller('MetasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MetasCtrl.awesomeThings.length).toBe(3);
  });
});
