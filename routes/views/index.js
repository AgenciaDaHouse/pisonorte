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

  view.render('index')
}
