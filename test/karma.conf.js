module.exports = function(config) {
    var _config = {
      basePath: '../',
  
      frameworks: ['jasmine'],
  
      files: [
        {
          pattern: './test/karma-test-shim.js',
          watched: true
        },
        {
          pattern: './src/assets/**/*',
          watched: false,
          included: false,
          served: true,
          nocache: false
        }
      ],
  
      proxies: {
        '/assets/': '/base/src/assets/'
      },
  
      preprocessors: {
        './test/karma-test-shim.js': ['webpack', 'sourcemap']
      },
  
      webpack: require('./webpack.test.js'),
  
      webpackMiddleware: {
        stats: 'errors-only'
      },
  
      webpackServer: {
        noInfo: true
      },
  
      browserConsoleLogOptions: {
        level: 'log',
        format: '%b %T: %m',
        terminal: true
      },
  
      coverageIstanbulReporter: {
        reports: [ 'html', 'lcovonly' ],
        fixWebpackSourcePaths: true
      },
  
      reporters: config.coverage ? ['kjhtml', 'dots', 'coverage-istanbul'] : ['kjhtml', 'dots'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['PhantomJS2'],
      phantomjsLauncher: {
        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
      },
      singleRun: false
    };
  
    config.set(_config);
  };
  