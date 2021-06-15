const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')
const app = express();
const port = 3000;
const Store = require('./Models/Store');

mongoose.connect(`mongodb+srv://jonnathan_store_locator:${process.env.DB_PASSWORD}@cluster0.e1ygu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json({ limit: '50mb'}));
app.use(cors());

app.get('/api/stores', (req, res) => {
    Store.find({}, (err, stores) => {
        if(err) res.status(500).send(err);
        res.status(200).send(stores);
    });
})

app.post('/api/stores', (req, res) => {
    let dbStores = [];
    let stores = req.body;
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

    Store.create(dbStores, (err, stores) => {
        if(err) res.status(500).send(err);
        res.status(200).send(stores);
    })

    // res.send(dbStores);
})

app.delete('/api/stores', (req, res) => {
    Store.deleteMany({}, (err) => {
        res.status(200).send(err)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})