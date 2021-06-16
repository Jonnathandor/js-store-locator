let map;
let infowindow;

window.onload = () => {
    initMap();
};


function initMap() {
    // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 34.063380, lng: -118.358080 },
    });
    infowindow = new google.maps.InfoWindow();
    getStores();
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
        let openStatusText = store.openStatusText;
        let phoneNumber = store.phoneNumber;
        bounds.extend(latLng);
        createMarker(latLng, name, address, openStatusText, index+1, phoneNumber);
    });
    map.fitBounds(bounds);
};

const createMarker = (latLng, name, address, openStatusText, storeNumber, phoneNumber) => {
    let html = `
        <div class="store-info-window">
            <div class="store-info-name">
                ${name}
            </div>
            <div class="store-info-open-status">
                ${openStatusText}
            </div>
            <div class="store-info-address">
                <div class="icon">
                    <i class="fas fa-location-arrow"></i>
                </div> 
                <span>
                    ${address}
                </span>
            </div>
            <div class="store-info-phone">
                <div class="icon">
                    <i class="fas fa-phone-alt"></i>
                </div> 
                <span>
                    <a href="tel:${phoneNumber}">${phoneNumber}</a>
                </span>
            </div>
        </div>
    `;
    const marker = new google.maps.Marker({
        position: latLng,
        map,
        label: `${storeNumber}`
    });

    marker.addListener("click", () => {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });
};