/**
 * dependencies
 */
var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * model
 */
var Banner = new keystone.List('Banner', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: '-index'
})

Banner.add({
  name: { type: String, required: true },
  textTop: { type: String },
  textBottom: { type: String },
  image: { type: Types.CloudinaryImage }
})

Banner.register()
