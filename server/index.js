const db = require('./db')
const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) => {
  res.send('Hello from the server!');
})


//crud READ read all cow data
// read all cows from the list
app.get('/app/cow',((req, res)=> {
  db.getAllCows((err, data) => {
    if (err) {
      res.status(500).send(console.log('Error!!', err));
    } else {
      res.status(201).send(data)
    }
  })
}));

// a test object for postman
// newCowObj = {name:'Baxter', description:'Likes to Eat'}
// make a cow
app.post('/app/cow', ((req, res) => {
  let data = req.body;
  db.makeACow(data, (err, data) =>{
    if (err) {
      res.status(500).send(console.log('Error!!', err));
    } else {
      res.status(201).send(data);
    }
  })
}));


// update a cow
//updateCowObj = {propName:'name', oldVal:'Baxter', newVal:'Ginny'}
app.post('/app/updatecow', ((req, res) => {
  let data = req.body;
  db.updateCow(data, (err, data) => {
    if (err) {
      res.status(500).send(console.log('Error from server!',err));
    } else {
      res.status(201).send('success!');
    }
  });
}));

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});




// app.get('/app/cow',((request, response)=> {
//   console.log('ping!')
//   db.getAllCows()
//   .then((data) => response.send(data.data))
//   .catch((err) => response.status(500).send(err));
// }));