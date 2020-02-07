const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('public'));


app.get('/seed', (req, res) => {
  axios.get('http://localhost:3003/seed')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err)
    })
});

app.get('/houses', (req, res) => {
  axios.get('http://localhost:3004/houses')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err)
    })
});

app.get('/listings', (req, res) => {
  axios.get('http://localhost:3001/listings')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err)
    })
});



app.get('/api/data/:id', (req, res) =>{
  const { id } = req.params;
  axios.get(`http://localhost:3002/api/data/${id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    })
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))