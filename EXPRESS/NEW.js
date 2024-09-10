const express = require('express');
let app = express();

// Creating a template engine

// Dynamically inputting content in the application
app.set('view engine', 'ejs');

// Creating a middleware

// app.use('/assets', (req, res, next) =>
// {
//     console.log(req.url);
//     next();
// })

app.use('/assets', express.static('./assets'))
// Creating new routes
app.get('/', (req, res) =>
{
    res.render('index');
})
app.get('/contact:info', (req, res) =>
{
    res.render('contact', {info: req.params.info});
})
app.get('/user/:name', (req, res) =>
{
    let data = {hobbies: ['playing football', 'playing drums', 'Eating good food'], sex: 'male'};
    // res.send(`Your id:  ${req.params.id}`);
    res.render('user', {newUser: req.params.name, myHobby: data.hobbies, mySex: data.sex});
})
console.log("New app started");
app.listen(400);