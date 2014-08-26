// Karma configuration
// Generated on Mon Aug 25 2014 15:38:39 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'public/libs/angular/angular.min.js',
      'public/libs/angular-route/angular-route.min.js',
      'public/libs/d3/d3.js',
      'public/libs/nvd3/nv.d3.js',
      'public/libs/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
      'public/libs/angular-mocks/angular-mocks.js',
      'public/scripts/app.js',
      'public/scripts/controllers.js',
      'test/*Spec.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
