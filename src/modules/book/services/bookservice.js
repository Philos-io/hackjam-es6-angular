(function(){
  'use strict';

  BookFactory.$inject = ['$http'];

  function BookFactory($http) {
    function getBook(id) {
      return $http.get('http://localhost:9000/api/books/'+ id)
               .then(function(response){
                 return response.data;
               });
    }

    function getBooks() {
      return $http.get('http://localhost:9000/api/books')
        .then(function(response){
          return response.data;
        });
    }

    function addBook(book) {
    }

    function deleteBook(id) {
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
