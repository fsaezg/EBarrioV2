'use strict';

describe('Controller: RelojCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var RelojCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RelojCtrl = $controller('RelojCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RelojCtrl.awesomeThings.length).toBe(3);
  });
});
