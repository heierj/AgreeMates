// Karma configuration
// Generated on Wed Apr 23 2014 20:21:41 GMT-0700 (PDT)

'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'public',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'app/vendor/angular/angular.js',
      'app/vendor/jquery/dist/jquery.min.js',
      'app/vendor/angular-mocks/angular-mocks.js',
      'app/vendor/jquery-ui/ui/minified/jquery-ui.min.js',
      '**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'app/vendor/bootstrap/**/*.js',
      'app/vendor/jquery/src/**/*.js',
      'app/vendor/momentjs/**/*.js',
      'app/vendor/jqueryui-touch-punch/**/*.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
