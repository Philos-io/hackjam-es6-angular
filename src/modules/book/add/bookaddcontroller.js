(function() {

    BookAddController.$inject=['$scope','$routeParams','BookFactory'];

    function BookAddController($scope, $routeParams, BookFactory) {


        function addBook() {

            BookFactory.addBook($scope.book);
        }


    }
    angular.module('book').controller('BookAddController',BookAddController);
})();