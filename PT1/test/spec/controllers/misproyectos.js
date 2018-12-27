'use strict';

describe('Controller: MisproyectosCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var MisproyectosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MisproyectosCtrl = $controller('MisproyectosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MisproyectosCtrl.awesomeThings.length).toBe(3);
  });
});
