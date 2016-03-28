var initMap = function () {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 34.9205734, lng: -79.7464198 },
        zoom: 18
    });
    var myLatlng = new google.maps.LatLng(34.920548, -79.746560);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Bo's Spot!"
    });
    marker.setMap(map);
    map.setCenter(map_center);
    // Scale map to fit specified points
    map.fitBounds(path_bounds);
}