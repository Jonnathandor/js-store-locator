let map;

window.onload = () => {
    initMap();
    getStores();
};


function initMap() {
    // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 34.063380, lng: -118.358080 },
    });
    createMarker();
};

const getStores = () => {
    const URL = 'http://localhost:3000/api/stores';
    fetch(URL)
    .then(res => {
        if(res.status !== 200){
            throw new Error(res.status);
        }
        return res.json();
    })
    .then(data => {
        console.log('here');
        console.log(data);
        searchLocationNear(data);
    });
};

const searchLocationNear = (stores) => {
    let bounds = new google.maps.LatLngBounds();
    stores.forEach((store, index) => {
        let latLng = new google.maps.LatLng(
            store.location.coordinates[1],
            store.location.coordinates[0]
        );

        let name = store.storeName;
        let address = store.addressLines[0];
        bounds.extend(latLng);
        createMarker(latLng, name, address);
    });
    map.fitBounds(bounds);
};

const createMarker = (latLng, name, address) => {
    new google.maps.Marker({
        position: latLng,
        map,
        title: "Hello World!",
    });
};