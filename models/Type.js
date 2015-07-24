/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Type = new keystone.List('Type', {
  autokey: { from: 'name', path: 'key', unique: true }
})

Type.add({
  name: { type: String, required: true }
})

Type.register()
