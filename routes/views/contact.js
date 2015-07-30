/*eslint new-cap:0*/
'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')

/**
 * settings
 */
var Enquiry = keystone.list('Enquiry')

/**
 * public
 */
exports = module.exports = function(req, res) {

  var locals = res.locals
  var newEnquiry = new Enquiry.model()
  var updater = newEnquiry.getUpdateHandler(req)

  // Set locals
  locals.section = 'contact'
  locals.formData = req.body || {}
  locals.validationErrors = {}
  locals.enquirySubmitted = false

  // updater
  updater.process(req.body, {
    flashErrors: true,
    fields: 'name, email, phone, city, address, message',
    errorMessage: 'Houve um problema com sua mensagem:'
  }, function(err) {
    if (err) {
      locals.validationErrors = err.errors
      return res.send(err)
    }

    locals.enquirySubmitted = true
    res.sendStatus(200)
  })
}
