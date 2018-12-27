'use strict';

describe('Controller: CasillaproyectosCtrl', function () {

  // load the controller's module
  beforeEach(module('ebarrioApp'));

  var CasillaproyectosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CasillaproyectosCtrl = $controller('CasillaproyectosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CasillaproyectosCtrl.awesomeThings.length).toBe(3);
  });
});
