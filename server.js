//  R'N'R   Dec 12, 2023

//DEPENDENCIES
const express = require("express");
const port = 3000;

//importing data from drinks.js
const drinks = require("./models/drinks");


//MAIN FUNCTIONALITY
const app = express();

//using EJS as a viewing engine
app.set('view engine', 'ejs');  //has to be after the app express

//ROUTES
//main route
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
})

//drinks route
app.get("/drinks", (req, res) => {
    //res.send(drinks); //initial rendering
    res.render('index', {drinks});    //rendering new index.ejs file
})


//Show route
app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id);
})


//LISTENER
app.listen(port, (req, res) => {
    console.log(`I am alive on port ${port}`);
});