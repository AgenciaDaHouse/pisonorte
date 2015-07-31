'use strict'

/**
 * settings
 */
var $items = $('#intro').children()
var total = $items.length
var current = 0
var visibleClass = 'is-visible'

/**
 * methods
 */
function changeItem() {
  $items
    .removeClass(visibleClass)
    .eq(current)
    .addClass(visibleClass)

  ++current

  if (current === total) {
    current = 0
  }
}

setInterval(changeItem, 6000)
