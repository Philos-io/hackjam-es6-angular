describe('MainController', function(){

  beforeEach(module('bookstore'));

  // Mocking the bookFactory service
  beforeEach(module(function($provide){
    $provide.factory('bookFactory', function(){

      function getAll(){
        return ["JavaScript"];
      }

      return {
        getAll: getAll
      };
    })
  }));

  var $controller, scope, bookFactory;

  // Inject the controller service
  beforeEach(inject(function($rootScope, _$controller_, _bookFactory_){
    $controller = _$controller_;
    bookFactory = _bookFactory_;

    // Create a new scope
    scope = $rootScope.$new();
    // Create a controller
    $controller('MainController', {$scope: scope, bookFactory: bookFactory});
  }));

  it('Should contain a list of books', function(){
    expect(scope.books).toBeDefined();
    expect(scope.books).toEqual(["JavaScript"]);
  });

});
