'use strict'

/**
 * definitions
 */
var $window = $(window)
var $header = $('#main-header')
var headerClass = 'c-main-header--small'
var limit = 20

/**
 * methods
 */
$window.on('scroll', function () {
  if ($window.scrollTop() > limit) {
    $header.addClass(headerClass)
  } else {
    $header.removeClass(headerClass)
  }
})
