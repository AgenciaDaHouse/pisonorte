'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')

/**
 * public
 */
exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res)
  var locals = res.locals

  locals.section = 'home'
  locals.mainNav = [
    { label: 'Home', url: '/' },
    { label: 'Empresa', url: '/#empresa' },
    { label: 'Produtos', url: '/#produtos' },
    { label: 'Promoções', url: '/#promocoes' },
    { label: 'Fornecedores', url: '/#fornecedores' },
    { label: 'Orçamentos/Contato', url: '/#contato' }
  ]

  view.on('init', function (next) {
    var products = keystone
      .list('Products')
      .model
      .find()
      .sort('sortOrder')

    products.exec(function(err, results) {
      locals.products = results
      next(err)
    })
  })

  view.on('init', function (next) {
    var offers = keystone
      .list('Offer')
      .model
      .find()
      .sort('sortOrder')

    offers.exec(function(err, results) {
      locals.offers = results
      next(err)
    })
  })

  view.on('init', function (next) {
    var suppliers = keystone
      .list('Supplier')
      .model
      .find()
      .sort('sortOrder')

    suppliers.exec(function(err, results) {
      locals.suppliers = results
      next(err)
    })
  })

  view.render('index')
}
