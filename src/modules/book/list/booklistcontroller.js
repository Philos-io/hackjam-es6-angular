(function() {
  'use strict';

    BookListController.$inject = ['BookFactory'];

    function BookListController(BookFactory) {

      BookFactory.getBooks()
        .then(function(books){
          this.books = books;
        }.bind(this));

    }

    angular.module('book').controller('BookListController',BookListController);
})();
