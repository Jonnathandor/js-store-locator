let map;

window.onload = () => {
    initMap();
}


function initMap() {
    // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 34.063380, lng: -118.358080 },
    });
    createMarker();
}

const createMarker = () => {
    new google.maps.Marker({
        position: { lat: 34.063380, lng: -118.358080 },
        map,
        title: "Hello World!",
    });
}