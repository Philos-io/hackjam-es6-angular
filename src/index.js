import angular, {module, bootstrap} from 'angular';
import mocks                        from './mocks';
import common                       from './modules/common/';
import book                         from './modules/book/';
import routes                       from './routes';

module('bookstore', [mocks, routes, common, book])

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(document.body, ['bookstore']);
});

