const express = require('express');
const StoreRouter = express.Router();
const StoreController = require('../Controller/StoreController');
const storeController = new StoreController();

StoreRouter.get('/stores', async (req, res) => {
    const zip_code = req.query.zip_code;

    storeController.findStoresAround(zip_code).then(stores => {
        res.status(200).send(stores);
    }).catch(err => {
        res.status(500).send(err);
    });
});


module.exports = StoreRouter;