/*eslint no-unused-vars:0*/
/*globals google*/
'use strict'

function initialize() {
  var myLatlng = new google.maps.LatLng(-23.259513, -51.163848)
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'TS&B Contractors Ltd'
  })
}

google.maps.event.addDomListener(window, 'load', initialize)
