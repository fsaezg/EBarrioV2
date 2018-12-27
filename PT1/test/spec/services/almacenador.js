'use strict';

describe('Service: almacenador', function () {

  // load the service's module
  beforeEach(module('ebarrioApp'));

  // instantiate service
  var almacenador;
  beforeEach(inject(function (_almacenador_) {
    almacenador = _almacenador_;
  }));

  it('should do something', function () {
    expect(!!almacenador).toBe(true);
  });

});
