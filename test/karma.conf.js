module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-route/angular-route.min.js',
      'public/bower_components/d3/d3.js',
      'public/bower_components/nvd3/nv.d3.js',
      'public/bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/scripts/**/*.js',
      'test/*Spec.js'
    ],
    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
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
