const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const port = 3000;
const Store = require('./Models/Store');

mongoose.connect(`mongodb+srv://jonnathan_store_locator:${process.env.DB_PASSWORD}@cluster0.e1ygu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/api/stores', (req, res) => {
    let db = req.body;
    console.log(db)
    let stores = new Store({
        storeName: 'Test2',
        phoneNumber: '133434534',
        location: {
            type: 'Point',
            coordinates: [
                -118.376354,
                34.063584
            ]
        }
    })
    stores.save();
    res.send(stores);
})

app.delete('/api/stores', (req, res) => {
    Store.deleteMany({}, (err) => {
        res.status(200).send(err)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})