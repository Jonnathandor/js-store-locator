const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    storeName: String,
    phoneNumber: String,
    address: {},
    open: String,
    addressLines: Array,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

module.exports = mongoose.model('Store', storeSchema);