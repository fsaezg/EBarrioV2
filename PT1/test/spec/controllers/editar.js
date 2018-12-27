'use strict';

describe('Controller: EditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var EditarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarCtrl = $controller('EditarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarCtrl.awesomeThings.length).toBe(3);
  });
});
