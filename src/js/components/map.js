/*eslint no-unused-vars:0*/
/*globals google*/
'use strict'

function initialize() {
  var ll = new google.maps.LatLng(-23.259545, -51.163688)
  var mapOptions = {
    center: ll,
    zoom: 15,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

  var marker = new google.maps.Marker({
    position: ll,
    map: map,
    title: 'Pisonorte'
  })
}

google.maps.event.addDomListener(window, 'load', initialize)
