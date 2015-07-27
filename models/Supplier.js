/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Supplier = new keystone.List('Supplier', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: '-index'
})

Supplier.add({
  name: { type: String, required: true },
  image: { type: Types.CloudinaryImage, required: true, initial: false },
  index: { type: Number }
})

Supplier.register()
