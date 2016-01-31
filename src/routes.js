(function(){
  'use strict';

    RouteConfig.$inject = ['$routeProvider'];

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: './src/modules/book/list/book.html',
              controller: 'BookListController',
              controllerAs :'bookList'
            })
            .when('/books/add', {
              templateUrl: './src/modules/book/add/add-book.html',
              controller: 'BookAddController',
              controllerAs: 'book'
            })
            .when('/books/:id', {
              templateUrl: './src/modules/book/details/book-details.html',
              controller: 'BookDetailsController',
              controllerAs: 'book'
            });
    }

    angular.module('book').config(RouteConfig);

})();

