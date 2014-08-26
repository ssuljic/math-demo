module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'public/libs/angular/angular.min.js',
      'public/libs/angular-route/angular-route.min.js',
      'public/libs/d3/d3.js',
      'public/libs/nvd3/nv.d3.js',
      'public/libs/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
      'public/libs/angular-mocks/angular-mocks.js',
      'public/scripts/**/*.js',
      'test/*Spec.js'
    ],
    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false
  });
};
