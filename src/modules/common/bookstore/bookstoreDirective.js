(function(){
  'use strict';

  function bookstoreDirective(){
    return {
      restrict: 'EA',
      templateUrl: 'src/modules/common/bookstore/bookstore.html'
    };
  }

  angular.module('common').directive('bookstore', bookstoreDirective);

})();
