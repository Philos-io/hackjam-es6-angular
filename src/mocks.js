(function(){
  'use strict';

  angular.module('bookstore')
  .run(function($httpBackend){
    $httpBackend.whenGET('/api/books').respond(getBooks());

    $httpBackend.whenGET(new RegExp('\\/books\\/[0-9]+'))
      .respond(function(method, url){
        var regexp = new RegExp('\\/books\\/([0-9]+)');
        var bookID = url.match(regexp)[1];
        var book = getBooks().filter(function(book){
          return book.bookID === Number(bookID);
        })[0];

        return [200, book];
      });

    $httpBackend.whenGET().passThrough();
  });

  function getBooks(){
    return [
      {
        bookID: 9809,
        author: 'Davy Mitchel',
        title: 'Functional JavaScript',
        description: 'Functional programming in JavaScript',
        price: 29.99,
        category: 'Programming language',
        cover: 'assets/img/javascript.jpg'
      },
      {
        bookID: 9100,
        author: 'Max Mitchel',
        title: 'AngularJS: Up and Running',
        description: 'Enhanced Productivity with Structured Web Apps',
        price: 19.99,
        category: 'Web Frameworks',
        cover: 'assets/img/angularjs.jpg'
      },
      {
        bookID: 9353,
        author: 'Jesse Cravens, Thomas Q Brady',
        title: 'Introduction to IOT Programming with JavaScript',
        description: "In this book you will build robot, connected apps and devices applications.",
        price: 18.99,
        category: 'Web Frameworks',
        cover: 'assets/img/iot.jpg'
      },
      {
        bookID: 9300,
        author: 'Jesse Cravens, Thomas Q Brady',
        title: 'Data visualisation in JavaScript',
        description:'Building data visualisation apps using JavaScript',
        price: 20.99,
        category: 'Web Frameworks',
        cover: 'assets/img/datavis.jpg'
      },
      {
        bookID: 9657,
        author: 'Jesse Cravens, Thomas Q Brady',
        title: 'ES6: JavaScript Next',
        description: "This book will cover ES6 entirely and will show you how to use ES6 today.",
        price: 9.99,
        category: 'Web Frameworks',
        cover: 'assets/img/es6.jpg'
      },
      {
        bookID: 9887,
        author: 'Jesse Cravens, Thomas Q Brady',
        title: 'Ionic Framework: Building hybrid app',
        description: "Build Hybrid apps using Angular, Ionic and deliver fast.",
        price: 9.99,
        category: 'Web Frameworks',
        cover: 'assets/img/ionic.jpg'
      },
      {
        bookID: 9546,
        author: 'Backstop Media, Rick Waldron',
        title: 'Make: JavaScript Robotics',
        description: 'Building NodeBots with Raspberry Pi, Arduino, and BeagleBone',
        price: 10.99,
        category: 'Robotic & Programming',
        cover: 'assets/img/robot.jpg'
      }
    ];
  }
})();
