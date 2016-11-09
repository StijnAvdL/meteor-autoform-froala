Package.describe({
  name: 'stijnavdl:autoform-froala',
  summary: 'Froala editor for aldeed:autoform',
  version: '0.0.7',
  git: 'https://github.com/StijnAvdL/meteor-autoform-froala'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'templating',
    'aldeed:autoform@5.8.1'
  ], both);
  api.use('froala:editor@2.1.0', 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-froala.js'  
  ], 'client');
});
