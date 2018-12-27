'use strict';

describe('Controller: DetallecasillaCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var DetallecasillaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetallecasillaCtrl = $controller('DetallecasillaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetallecasillaCtrl.awesomeThings.length).toBe(3);
  });
});
