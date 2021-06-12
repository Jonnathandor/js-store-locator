require('../style/style.css')
window.onload = () => {
    insertGoogleMapsScript();
    insertMap();
}

window.initMap = initMap;

const insertGoogleMapsScript = () => {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;
    script.setAttribute("defer", "defer");
    document.head.append(script);
};

const insertMap = () => {
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    document.body.append(mapDiv);
};

function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 52.632469, lng: -1.689423 },
    });
}