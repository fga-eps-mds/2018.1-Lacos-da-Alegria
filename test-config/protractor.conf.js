// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  specs: ['../src/pages/**/*.e2e.spec.ts'],
  baseUrl: 'http://localhost:8100/',
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {

        require('ts-node').register({
            project: 'e2e'
        });

        require('connect')().use(require('serve-static')('www')).listen(8100);

    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
  // onPrepare() {
  //   require('ts-node').register({
  //     project: 'e2e/tsconfig.e2e.json'
  //   });
  //   jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  // }
};
