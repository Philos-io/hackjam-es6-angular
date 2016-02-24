import angular, {module} from 'angular';

export default  function BookFactory($http) {
  function getBook(id) {
    // TIPS: template literals
    return $http.get('/api/books/'+ id)
    .then((response) => {
      return response.data;
    });
  }

  function getBooks() {
    return $http.get('/api/books')
    .then((response) =>{
      return response.data;
    });
  }

  function addBook(book) {
    // Not implemented yet
    throw new Error('Method not implemented');
  }

  function deleteBook(id) {
    // Not implemented yet
    throw new Error('Method not implemented');
  }

  return {
    getBook : getBook,
    getBooks : getBooks,
    addBook : addBook,
    deleteBook : deleteBook
  };
}

BookFactory.$inject = ['$http'];

export default angular.module('book.service', []).factory('BookFactory', BookFactory).name;
