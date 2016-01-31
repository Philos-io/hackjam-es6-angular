(function() {
  'use strict';

  BookAddController.$inject=['$scope','$routeParams','BookFactory'];
  function BookAddController($routeParams, BookFactory) {

    function addBook() {
      BookFactory.addBook(this.book);
    }

    this.addBook = addBook;
  }
  angular.module('book').controller('BookAddController',BookAddController);

})();
