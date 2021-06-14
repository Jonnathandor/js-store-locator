window.onload = () => {
    initMap();
}


function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 34.063380, lng: -118.358080 },
    });
}