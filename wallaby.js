module.exports = function () {
  return {
    files: [
      'node_modules/chai/chai.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/bookstore.js',
      'workshops/01_controller_service_filter_directive_testing/solution/test/*.js'
    ],
    tests: [
      'tests/*.spec.js'
    ]
  };
};
