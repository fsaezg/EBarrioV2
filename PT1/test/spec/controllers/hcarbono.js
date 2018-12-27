'use strict';

describe('Controller: HcarbonoCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var HcarbonoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HcarbonoCtrl = $controller('HcarbonoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HcarbonoCtrl.awesomeThings.length).toBe(3);
  });
});
