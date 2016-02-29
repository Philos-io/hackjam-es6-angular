'use strict';


module.exports = function (wallaby) {

  let babelCompiler = wallaby.compilers.babel({
    'presets': ['es2015']
  });

  return {
    files: [
      'node_modules/chai/chai.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/modules/book/list/listBooksController.js'
    ],
    tests: [
      'tests/*.spec.js'
    ],
    env: {
      type: 'browser'
    },
    compilers: {
      'tests/*.spec.js': babelCompiler,
      'src/modules/**/*.js': babelCompiler
    }
  };
};
