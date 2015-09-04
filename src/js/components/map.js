/*eslint no-unused-vars:0*/
/*globals google*/
'use strict'

function initialize() {
  var ll1 = new google.maps.LatLng(-23.259513, -51.163848)
  var ll2 = new google.maps.LatLng(-23.315396, -51.151530)
  var mapOptions = {
    zoom: 15,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

  var marker1 = new google.maps.Marker({
    position: ll1,
    map: map,
    title: 'Pisonorte'
  })
  var marker2 = new google.maps.Marker({
    position: ll2,
    map: map,
    title: 'Pisonorte'
  })

  var bounds = new google.maps.LatLngBounds()
  bounds.extend(marker1.position)
  bounds.extend(marker2.position)

  map.fitBounds(bounds)
}

google.maps.event.addDomListener(window, 'load', initialize)
