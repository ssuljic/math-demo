describe('myApp', function(){
  beforeEach(module('myApp'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should have defined HomeController', function() {
    expect(ctrl).toBeDefined();
  });

  describe('HomeController', function() {
    it('should have a working range method defined', function() {
      expect(scope.range).toBeDefined();
      expect(scope.range(1, 4, 1)).toEqual([1, 2, 3]);
    });

    it('should have a setData method defined', function() {
      expect(scope.setData).toBeDefined();
    });

    describe('range', function() {
      it('should return empty array when one of the arguments is null or the step is zero', function() {
        expect(scope.range(null, 4, 1)).toEqual([ ]);
        expect(scope.range(0, null, 1)).toEqual([ ]);
        expect(scope.range(1, 4, null)).toEqual([ ]);
        expect(scope.range(1, 4, 0)).toEqual([ ]);
      });
    });
  });
});