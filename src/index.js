(function() {
  'use strict';

  angular.module('bookstore', ['common','ngRoute','book']);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

})();

