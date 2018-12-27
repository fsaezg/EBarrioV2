'use strict';

describe('Controller: EfficientCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var EfficientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EfficientCtrl = $controller('EfficientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EfficientCtrl.awesomeThings.length).toBe(3);
  });
});
