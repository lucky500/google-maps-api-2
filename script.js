
 var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(47.6072, -122.3361);
    var mapOptions = {
      zoom: 13,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "Hello"
        });
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }