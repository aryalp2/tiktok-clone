const express = require('express');
const mongoose = require('mongoose');
const Data = require('./data.js');
const Videos = require('./dbModel.js');



// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

// DB config
const connection_url = "mongodb+srv://adminprashant:8h4cPuHkWxSnBIwt@cluster0.xa0f0.mongodb.net/tiktokDatabase?retryWrites=true&w=majority";


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// apiendpoints
app.get('/', (req, res) => 
    res.status(200).send('hello world')
);

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).send(data)
        } 
    })
})

app.post('/v2/posts', (req, res) => {
    // POST request ADD DATA to the database
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`listening to local host: ${port}`));
