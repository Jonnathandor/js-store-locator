const Store = require('../Models/Store');
const GoogleMapsService = require('../Services/GoogleMapsService');
const googleMapsService = new GoogleMapsService();

class StoreController {
        async findStoresAround(zip_code) {
            // console.log(zip_code);
            let storesData = [];
            await googleMapsService.getCoordinates(zip_code)
            .then(async coordinates => {
                // console.log(coordinates);
                await Store.find({
                    location: {
                        $near: {
                            $maxDistance: 3200, // How much distance in miles should we look around
                            $geometry: {
                                type: "Point",
                                coordinates: coordinates
                            }
                        }
                    }
                }, (err, stores) => {
                    if(err) console.log(err);
                    // console.log('I am about to return stores:', stores);
                    storesData = [...stores];
                });
            }).catch(err => {
                console.log(err);
            });
            // console.log(storesData);
            return storesData;
    }
}

module.exports = StoreController;