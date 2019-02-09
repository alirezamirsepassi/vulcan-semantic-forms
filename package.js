Package.describe({
  name: 'alirezamirsepassi:semantic-forms',
  summary: 'Form containers for React',
  version: '1.0.0',
  git: 'https://github.com/alirezamirsepassi/vulcan-semantic-forms.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6.1');

  api.use(['vulcan:core@1.12.16']);

  api.mainModule('lib/client/main.js', ['client']);
  api.mainModule('lib/server/main.js', ['server']);
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'meteortesting:mocha', 'vulcan:test', 'vulcan:forms']);
  api.mainModule('./test/index.js');
});