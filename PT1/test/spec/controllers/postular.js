'use strict';

describe('Controller: PostularCtrl', function () {

  // load the controller's module
  beforeEach(module('plataformaApp'));

  var PostularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostularCtrl = $controller('PostularCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostularCtrl.awesomeThings.length).toBe(3);
  });
});
