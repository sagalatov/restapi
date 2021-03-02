const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const artistController = require('./controllers/artists')
const app = express();
const port = 3013;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

db.connect('mongodb://localhost:27017/', function (err) {
    if (err) throw err;
    app.listen(port, () => {
        console.log(`Server started on localhost:${port}`)
    })
})

app.get('/artists', artistController.all)

app.get('/artists/:id', artistController.findById)

app.post('/artists', artistController.create)

app.put('/artists/:id', artistController.update)

app.delete('/artists/:id', artistController.delete)