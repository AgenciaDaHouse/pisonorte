/*eslint camelcase: [2, {properties: "never"}]*/

/**
 * dependencies
 */
require('dotenv').load()
var keystone = require('keystone')
var config = require('./config')

/**
 * settings
 */
keystone.init({
  'name': config.APP_NAME,
  'brand': config.APP_NAME,
  'port': process.env.PORT || config.APP_PORT,

  'static': 'public',
  'favicon': 'public/favicon.ico',
  'views': 'templates/views',
  'view engine': 'jade',

  'emails': 'templates/emails',

  'auto update': true,
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'mfT!Q*|V]9]RXB<Ty}h]{<7B@5{]t0>$l`1w$HG2]K{B|sAS(86[ug8bb%5:kGEJ',

  'mongo': process.env.MONGOLAB_URI || 'mongodb://localhost/pisonorte'
})

// Models
keystone.import('models')

// Locals
keystone.set('locals', {
  _: require('underscore'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
})

// Routes
keystone.set('routes', require('./routes'))

// Email locals
keystone.set('email locals', {
  logo_src: '/images/logo-email.gif',
  logo_width: 194,
  logo_height: 76,
  theme: {
    email_bg: '#f9f9f9',
    link_color: '#2697de',
    buttons: {
      color: '#fff',
      background_color: '#2697de',
      border_color: '#1a7cb7'
    }
  }
})

// Email rules
keystone.set('email rules', [{
  find: '/images/',
  replace: (keystone.get('env') === 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
}, {
  find: '/keystone/',
  replace: (keystone.get('env') === 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
}])

// Email tests
keystone.set('email tests', require('./routes/emails'))

// Admin nav config
keystone.set('nav', {
  'galleries': 'galleries',
  'enquiries': 'enquiries',
  'users': 'users'
})

// Start Keystone
keystone.start()
