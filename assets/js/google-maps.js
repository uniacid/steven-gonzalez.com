//*********************Google MAP *********************/

var color = "#3EE4EF"; // google map background colour
var saturation = 100; //
var mapLatitude = 26.368390;
var mapLongitude = -80.075051; //(Fist Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
var mapZoom_value = 12; // Map zoom level parameter only numeric

//map-marker
var marker1_Latitude = 26.368236;
var marker1_Longitude = -80.129210;
var marker1_content = "<h2>Steven</h2> Boca Raton, FL"; // marker or  on click content (Info Window)
var marker1_pointerUrl = 'assets/img/map-marker.png'; // set your color pointer here!

//dragable mobile
var drag;
if ($(window).width() < 796) {
    drag = false;
} else {
    drag = true;
}

/* googleMaps */

function map_canvas_loaded() {
    var latlng = new google.maps.LatLng(mapLatitude, mapLongitude);

    // setting styles here
    var styles = [{
        "featureType": "landscape",
        "stylers": [{
            "hue": "#000"
        }, {
            "saturation": -100
        }, {
            "lightness": 40
        }, {
            "gamma": 1
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "hue": color
        }, {
            "saturation": saturation
        }, {
            "lightness": 20
        }, {
            "gamma": 1
        }]
    }, {
        "featureType": "road.arterial",
        "stylers": [{
            "hue": color
        }, {
            "saturation": saturation
        }, {
            "lightness": -10
        }, {
            "gamma": 1
        }]
    }, {
        "featureType": "road.local",
        "stylers": [{
            "hue": color
        }, {
            "saturation": saturation
        }, {
            "lightness": 20
        }, {
            "gamma": 1
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "hue": "#000"
        }, {
            "saturation": -100
        }, {
            "lightness": 15
        }, {
            "gamma": 1
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "hue": "#000"
        }, {
            "saturation": -100
        }, {
            "lightness": 25
        }, {
            "gamma": 1
        }]
    }];
    var options = {
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: mapZoom_value,
        styles: styles
    };
    var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);




    //****************************************************************************
    // marker 1 content
    //****************************************************************************
    var pointer1 = new google.maps.LatLng(marker1_Latitude, marker1_Longitude);

    var marker1 = new google.maps.Marker({
        position: pointer1,
        map: map_canvas,
        icon: marker1_pointerUrl //Custom Pointer URL
    });

    google.maps.event.addListener(marker1, 'click',
        function() {
            var infowindow = new google.maps.InfoWindow({
                content: marker1_content
            });
            infowindow.open(map_canvas, marker1);
        });
}

window.onload = function() {
    map_canvas_loaded();
};
/* End */


//Google map end
