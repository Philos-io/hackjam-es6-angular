describe('bookFactory', function(){

  beforeEach(module('bookstore'));

  var bookFactory;

  // Inject the controller service
  beforeEach(inject(function(_bookFactory_){
    bookFactory = _bookFactory_;
  }));

  it('Should contain a property getAll that returns the list of books', function(){
    expect(bookFactory.getAll).toBeDefined();
    expect(bookFactory.getAll()).toEqual()
  });
});
