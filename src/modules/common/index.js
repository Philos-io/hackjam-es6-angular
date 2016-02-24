import angular, {module} from 'angular';
import bookstore         from './bookstore/bookstoreComponent';
import navbar            from './nav/navbarComponent'

export default angular.module('common', [bookstore, navbar]).name;

