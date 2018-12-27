'use strict';

describe('Controller: EfficienthomeCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var EfficienthomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EfficienthomeCtrl = $controller('EfficienthomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EfficienthomeCtrl.awesomeThings.length).toBe(3);
  });
});
