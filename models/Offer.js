/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Offer = new keystone.List('Offer', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: '-index'
})

Offer.add({
  name: { type: String, required: true },
  image: { type: Types.CloudinaryImage, required: true, initial: false },
  obs: { type: String },
  price: { type: Types.Money, format: '$0.0,00', required: true, initial: false, default: 0 },
  listPrice: { type: Types.Money, format: '$0.0,00' },
  index: { type: Number }
})

Offer.register()
