const { response } = require('express');
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

    async saveStores(stores) {
        let dbResponse;
        let dbStores = [];
        stores.forEach((store) => {
            dbStores.push({
                storeName: store.name,
                phoneNumber: store.phoneNumber,
                address: store.address,
                openStatusText: store.openStatusText,
                addressLines: store.addressLines,
                location: {
                    type: 'Point',
                    coordinates: [
                        store.coordinates.longitude,
                        store.coordinates.latitude
                    ]
                }
            });
        });
            
        await Store.create(dbStores, (err, stores) => {
            // if(err) res.status(500).send(err);
            // res.status(200).send(stores);
            if(err) {
                dbResponse = err
            } else {
                dbResponse = stores;
            }
        });

        return stores;
    }

    async deleteStores() {
        await Store.deleteMany({}, (err) => {
            return err;
        });
    }
}

module.exports = StoreController;