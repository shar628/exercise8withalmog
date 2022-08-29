// console.log('hello world 4');
const express = require('express');
const app = express();

// const fs = require('fs')
const api1 = require('./api1.json')
const api2 = require('./api2.json')
const api3 = require('./api3.json')
const api4 = require('./api4.json')
const api5 = require('./api5.json')
const api60 = require('./api60.json')



// fs.writeFile("./api5.json", JSON.stringify(api5, () => {
//     // if (err) throw err;
//     console.log("Done writing"); // Success 
// }))


app.get('/', (req, res) => {
    res.send(JSON.stringify({ name: 'shaul', age: 42 }))
})

app.get('/shar', (req, res) => {
    res.send(JSON.stringify({ name: 'sharabi' }))
})

app.get('/api1', (req, res) => {
    res.send(JSON.stringify(api1))
})

app.get('/api2', (req, res) => {
    res.send(JSON.stringify(api2))
})

app.get('/api3', (req, res) => {
    res.send(JSON.stringify(api3))
})

app.get('/api4', (req, res) => {
    res.send(JSON.stringify(api4))
})

app.get('/api5', (req, res) => {
    res.send(JSON.stringify(api5))
})

app.get('/api60', (req, res) => {
    res.send(JSON.stringify(api60))
});


app.listen(8000, () => {
    console.log('Server running at http://127.0.0.1:8000/');
})
