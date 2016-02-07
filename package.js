Package.describe({
  name: 'thegeekmachine:autoform-froala',
  summary: 'Froala editor for aldeed:autoform',
  version: '0.0.6',
  git: 'https://github.com/thegeekmachine/meteor-autoform-froala'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'templating',
    'aldeed:autoform'
  ], both);
  api.use('froala:editor', 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-froala.js'  
  ], 'client');
});
