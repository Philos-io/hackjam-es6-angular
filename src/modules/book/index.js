import angular, {module}    from 'angular';
import books                from './list/listBooksComponent';
import BookService          from './services/bookservice';

export default module('book', [books, BookService]).name;
