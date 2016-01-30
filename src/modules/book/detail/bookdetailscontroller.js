(function() {

    BookDetailsController.$inject =['$scope','$routeParams','BookFactory'];

    function BookDetailsController($scope, $routeParams, BookFactory) {

        if ($routeParams.id) {
            $scope.book = BookFactory.getBook($routeParams.id);
        } else {
            $scope.book = {
                covers: ['assets/img/angularjs.jpg', 'assets/img/coman.jpeg'],
                add: function () {
                    debugger
                    addBook();
                }
            }
        }



    }
    angular.module('book').controller('BookDetailsController',BookDetailsController);
})();