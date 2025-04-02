/* global Package, Npm */
/* eslint-disable prefer-arrow-callback */

Package.describe({
  name: 'bluehive:stub-collections',
  version: '1.1.0',
  summary: 'Stub out Meteor collections with in-memory local collections.',
  documentation: 'README.md',
  git: 'https://github.com/MartinEicher/meteor-stub-collections.git',
  debugOnly: true,
});

Npm.depends({
  chai: '4.1.2',
  sinon: '6.0.1',
});

Package.onUse(function onUse(api) {
  api.use([
    'ecmascript',
    'mongo',
  ]);
  api.mainModule('index.js');
});

Package.onTest(function onTest(api) {
  api.use([
    'bluehive:stub-collections',
    'aldeed:simple-schema@1.13.1',
    'aldeed:collection2@4.1.1',
    'ecmascript',
    'mongo@2.1.1',
    'lmieulet:meteor-coverage@2.0.2', // Needed until https://github.com/meteortesting/meteor-mocha/pull/69 is merged
    'meteortesting:mocha@1.0.0',
  ]);
  api.mainModule('tests.js');
});
