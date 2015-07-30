/*eslint camelcase: [2, {properties: "never"}]*/
'use strict'

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
  editable: keystone.content.editable,
  toPrice: function (value) {
    return value.toFixed(2).replace('.', ',')
  }
})

// Routes
keystone.set('routes', require('./routes'))

// Email locals
keystone.set('email locals', {
  logo_src: '/img/logo.png',
  logo_width: 247,
  logo_height: 70,
  theme: {
    email_bg: '#f3f3f3',
    link_color: '#0069b4',
    buttons: {
      color: '#fff',
      background_color: '#0069b4',
      border_color: '#ccc'
    }
  }
})

// Email rules
keystone.set('email rules', [{
  find: '/images/',
  replace: (keystone.get('env') === 'production') ? 'http://pisonorte.herokuapp.com/img/' : 'http://localhost:3000/img/'
}, {
  find: '/keystone/',
  replace: (keystone.get('env') === 'production') ? 'http://pisonorte.herokuapp.com/keystone/' : 'http://localhost:3000/keystone/'
}])

// Email tests
keystone.set('email tests', require('./routes/emails'))

// Admin nav config
keystone.set('nav', {
  'products': 'products',
  'showcase': 'offers',
  'enquiries': 'enquiries',
  'users': 'users'
})

// Start Keystone
keystone.start()
