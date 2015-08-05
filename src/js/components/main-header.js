'use strict'

/**
 * definitions
 */
var $window = $(window)
var $header = $('#c-main-header')
var $nav = $('#c-main-nav__nav')
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

/**
 * scroll nav
 */
$nav.onePageNav({
  changeHash: true,
  currentClass: 'is-active'
})

/**
 * responsive nav
 */
$('#c-main-nav__select').on('change', function () {
  $nav.find('[href="' + this.value + '"]').click()
  $(this).prop('selectedIndex', 0)
})
