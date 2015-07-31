/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Products = new keystone.List('Products', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: '-index'
})

Products.add({
  name: { type: String, required: true },
  image: { type: Types.CloudinaryImage, required: true, initial: false },
  description: { type: String },
  type: { type: Types.Relationship, ref: 'Type' },
  index: { type: Number }
})

Products.register()
