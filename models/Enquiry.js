'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')

/**
 * settings
 */
var Types = keystone.Field.Types

/**
 * model
 */
var Enquiry = new keystone.List('Enquiry', {
  nocreate: true,
  noedit: true
})

Enquiry.add({
  name: { type: Types.Name, required: true },
  email: { type: Types.Email, required: true },
  city: { type: String },
  phone: { type: String },
  address: { type: String },
  message: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
})

Enquiry.schema.pre('save', function(next) {
  this.wasNew = this.isNew
  next()
})

Enquiry.schema.post('save', function() {
  if (this.wasNew) {
    this.sendNotificationEmail()
  }
})

Enquiry.schema.methods.sendNotificationEmail = function(callback) {
  if (typeof callback !== 'function') {
    callback = function () {}
  }

  var enquiry = this

  keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
    if (err) {
      return callback(err)
    }

    var name = [ enquiry.name.first, enquiry.name.last ].join(' ').trim()

    new keystone.Email('enquiry-notification').send({
      to: admins,
      from: { name: name, email: enquiry.email },
      subject: '[site] contato de ' + name,
      enquiry: enquiry
    }, callback)
  })
}

Enquiry.defaultSort = '-createdAt'
Enquiry.defaultColumns = 'name, email, createdAt'
Enquiry.register()
