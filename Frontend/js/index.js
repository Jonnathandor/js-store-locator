let map;
let infowindow;
const markers = []; 

window.onload = () => {
    initMap();

    document.getElementById('search').addEventListener('click', () => {
        getStores();
    });
};

function initMap() {
    // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 34.063380, lng: -118.358080 },
    });
    infowindow = new google.maps.InfoWindow();
};

const getStores = () => {
    zip_code = document.getElementById('zip-code').value; 
    const API_URL = 'http://localhost:3000/api/stores';
    const fullUrl = `${API_URL}?zip_code=${zip_code}`;
    if(!zip_code) return;
    fetch(fullUrl)
    .then(res => {
        if(res.status !== 200){
            throw new Error(res.status);
        }
        return res.json();
    })
    .then(data => {
        clearLocations();
        searchLocationNear(data);
        setStoresList(data);
        setOnClickListener();
    });
};

const searchLocationNear = stores => {
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
    markers.push(marker);
};

const setOnClickListener = () => {
    let storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach((element, index) => {
        element.addEventListener('click', () => {
            google.maps.event.trigger(markers[index], 'click');
        });
    });
};

const setStoresList = stores => {
    let storesHtml = '';
    stores.forEach((store, index) => {
        storesHtml += `
        <div class="store-container">
            <div class="store-info-container">
                <div class="store-address">
                    ${store.addressLines[0]} <br>
                    ${store.addressLines[1]}
                </div>
                <div class="store-number-container">
                    <div class="store-phone-number">
                        ${store.phoneNumber}
                    </div>
                </div>
            </div>
            <div class="store-number-container">
                <div class="store-number">
                    ${index+1}
                </div>
            </div>
        </div>
        `;
    })
    document.querySelector('.stores-list').innerHTML = storesHtml;
};

const clearLocations = () => {
    infowindow.close();
    for(let i = 0; i < markers.length; i++){
        markers[i].setMap(null);
    }
    markers.length = 0;
};