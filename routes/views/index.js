'use strict'

/**
 * dependencies
 */
var keystone = require('keystone')
var _ = require('underscore')

/**
 * public
 */
exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res)
  var locals = res.locals

  locals.section = 'home'
  locals.mainNav = [
    { label: 'Home', url: '/#intro' },
    { label: 'Empresa', url: '/#empresa' },
    { label: 'Produtos', url: '/#produtos' },
    { label: 'Promoções', url: '/#promocoes' },
    { label: 'Fornecedores', url: '/#fornecedores' },
    { label: 'Orçamentos/Contato', url: '/#contato' }
  ]

  view.on('init', function (next) {
    var banners = keystone
      .list('Banner')
      .model
      .find()
      .sort('sortOrder')

    banners.exec(function(err, results) {
      locals.banners = results
      next(err)
    })
  })

  view.on('init', function (next) {
    var types = keystone
      .list('Type')
      .model
      .find()
      .sort('sortOrder')

    types.exec(function(err, results) {
      locals.types = results
      next(err)
    })
  })

  view.on('init', function (next) {
    var products = keystone
      .list('Products')
      .model
      .find()
      .sort('sortOrder')

    products.exec(function(err, results) {
      var output = {}
      var types = _.indexBy(locals.types, 'id')

      var formated = results.map(function (item) {
        item.section = types[item.type].name
        return item
      })

      formated = _.groupBy(formated, 'section')

      var order = _.map(formated, function (value, key) {
        return { name: key, length: value.length }
      })

      _.sortBy(order, 'length').reverse().forEach(function (item) {
        var name = item.name
        output[name] = formated[name]
      })

      locals.products = output
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
