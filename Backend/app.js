const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')
const app = express();
const port = 3000;
const storeRoute = require('./Routes/Store')

mongoose.connect(`mongodb+srv://jonnathan_store_locator:${process.env.DB_PASSWORD}@cluster0.e1ygu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(express.json({ limit: '50mb'}));
app.use(cors());

app.use('/api', storeRoute);

app.listen(port, () => {
  console.log(`The API is listening at http://localhost:${port}`)
})