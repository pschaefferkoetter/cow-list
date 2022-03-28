// import database
const db = require('./db');

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// get all cows
// get all cows instances
app.get('/app/cows', (req, res) => {
  db.findAllCows()
  .then(data => res.status(200).send(data))
  .catch(err => res.status(500).send('ERROR!!'))
});

app.post('/app/cows', (req, res) => {
  db.createACow(req.body)
  .then(data => res.status(201).send('Created a Cow!'))
  .catch(err => res.status(500).send('ERROR!!'))
});


app.listen(port, () => {
  console.log(`Listening on Port : ${port}`)
})