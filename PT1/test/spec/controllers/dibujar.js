'use strict';

describe('Controller: DibujarCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var DibujarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DibujarCtrl = $controller('DibujarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DibujarCtrl.awesomeThings.length).toBe(3);
  });
});
