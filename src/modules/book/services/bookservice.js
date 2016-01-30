(function(){
  'use strict';

  BookFactory.$inject = ['$http'];

  function BookFactory($http) {
    function getBook(id) {
      var found = books.filter((book) => book.bookID == id);
      if (found[0]) {
        return found[0]
      }
      return null;
    }

    function getBooks() {
      return $http.get('http://localhost:9000/api/books');
    }

    function addBook(book) {
      book.bookID = nextBookId();
      delete book.covers;
      getBooks().push(book);
    }

    function deleteBook(id) {
      var index = books.findIndex((book) => book.bookID == id);
      if (index !== -1) {
        books.splice(index, 1);
      }
    }

    function nextBookId() {
      var random = getRandomIntInclusive(0, 10000);
      while (getBook(random) != null) {
        random = angular.random(10000);
      }
      return random;
    }

    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
      getBook : getBook,
      getBooks : getBooks,
      addBook : addBook,
      deleteBook : deleteBook
    };
  }

  angular.module('bookstore').factory('BookFactory', BookFactory);
})();
