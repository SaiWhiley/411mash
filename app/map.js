function initialize() {
    var mapOptions ={
        zoom: 19,
        center: new google.maps.LatLng( -27.470050,153.029020)
    };
    var map = new google.maps.Map(document.getElementById(`map-canvas`), mapOptions);
}

google.maps.event.addDomListener(window, `load`, initialize);