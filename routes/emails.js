/*eslint new-cap:0 camelcase:0*/
'use strict'

/**
 * This file defines the email tests for your project.
 *
 * Each email test should provide the locals used to render the
 * email template for preview.
 *
 * Values can either be an object (for simple tests), or a
 * function that calls a callback(err, locals).
 *
 * Sample generated emails, based on the keys and methods below,
 * can be previewed at /keystone/test-email/{key}
 */

/**
 * dependencies
 */
var keystone = require('keystone')

/**
 * public
 */
module.exports = {
  'enquiry-notification': function(req, res, callback) {
    var Enquiry = keystone.list('Enquiry')

    var newEnquiry = new Enquiry.model({
      name: { first: 'Test', last: 'User' },
      email: 'contact@pisonorte.com',
      phone: '+61 2 1234 5678',
      address: 'Address',
      city: 'City',
      message: { md: 'Nice enquiry notification.' }
    })

    callback(null, {
      admin: 'Admin User',
      enquiry: newEnquiry,
      enquiry_url: '/keystone/enquiries/'
    })
  }
}
