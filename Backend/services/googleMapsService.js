const axios = require('axios');
require('dotenv').config()
const googleGeocoding = 'https://maps.googleapis.com/maps/api/geocode/json';

class GoogleMaps {
    async getCoordinates(zip_code) {
        let coordinates = [];
        await axios.get(googleGeocoding, {
            params: {
                address: zip_code,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        }).then(response => {
            const data = response.data;
            coordinates = [
                data.results[0].geometry.location.lng,
                data.results[0].geometry.location.lat
            ];
        }).catch(error => {
            throw new Error(error);
        })

        return coordinates;
    }
}

module.exports = GoogleMaps;