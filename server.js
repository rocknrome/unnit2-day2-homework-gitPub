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
//original show route

// app.get("/drinks/:id", (req, res) => {
//     res.send(req.params.id);
// })

//updated Show route
app.get("/drinks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < drinks.length) {
        const drink = drinks[id];
        drink.image += '.png';
        res.render('show', { drink });
    } else {
        res.send("Drink not found");
    }
});


//LISTENER
app.listen(port, (req, res) => {
    console.log(`I am alive on port ${port}`);
});