const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/api/stores', (req, res) => {
    let db = req.body;
    console.log(db)
    res.send(db);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})