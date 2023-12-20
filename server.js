//  R'N'R   Dec 12, 2023

//DEPENDENCIES
const express = require("express");
const port = 3000;

//MAIN FUNCTIONALITY
const app = express();

//ROUTES
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
})


//LISTENER
app.listen(port, (req, res) => {
    console.log(`I am alive on port ${port}`);
});