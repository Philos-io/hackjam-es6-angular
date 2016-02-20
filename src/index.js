(function() {
  'use strict';

  angular.module('bookstore', ['common','ngRoute','book', 'ngMockE2E']);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

})();

