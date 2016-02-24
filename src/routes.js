import angular from 'angular';
import ngRoute from 'angular-route';


export function RouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<books></books>'
    })
    .when('/books/add', {
      template: '<add-book></add-book>'
    })
    .when('/books/:id', {
      template: '<details-book></details-book>'
    });
}

RouteConfig.$inject = ['$routeProvider'];

export default angular.module('bookstore.routes', [ngRoute]).config(RouteConfig).name;
