jQuery(function ($) {
    function init_map1() {
        var myLocation = new google.maps.LatLng(-23.4865071,-47.4510347,17);
        var mapOption = {
            center: myLocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Localização"
        });
        var map = new google.maps.Map(document.getElementById("map1"),
            mapOptions);
        marker.setMap(map);
    }
    init_map1();
});