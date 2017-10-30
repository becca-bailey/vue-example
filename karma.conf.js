var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    exclude: [],
    files: [
      'node_modules/es6-promise/dist/es6-promise.auto.js',
      { pattern: 'src/**/*.spec.ts', watch: false }
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    frameworks: ['jasmine'],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity
  })
}
