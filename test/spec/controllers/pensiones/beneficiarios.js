'use strict';

describe('Controller: BeneficiariosCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var BeneficiariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeneficiariosCtrl = $controller('BeneficiariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BeneficiariosCtrl.awesomeThings.length).toBe(3);
  });
});
