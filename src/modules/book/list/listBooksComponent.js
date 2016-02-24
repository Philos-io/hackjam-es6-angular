import angular, {module}  from 'angular';
import booksTemplate      from './books.html';
import ListBooksController    from './listBooksController';

export function listBookComponent(){
  return {
    restrict: 'EA',
    template: booksTemplate,
    controller: ListBooksController,
    controllerAs: 'bookList'
  };
}

export default module('book.booksComponent', []).directive('books', listBookComponent).name;
