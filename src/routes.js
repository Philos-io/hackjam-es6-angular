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
                controller: 'BookAddController'
            })
            .when('/books/:id', {
                templateUrl: './src/modules/book/details/book-details.html',
                controller: 'BookDetailsController'
            });
    }
    angular.module('book').config(RouteConfig);
})();

