/*

General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

*/

//let movieName;

const express = require('express');
const app = express();
const request = require('request');

app.get("/", (req, res) => {
    res.redirect("/search");
});

app.get("/search", (req, res) => {
    res.render("search.ejs");

});

app.get("/results", (req, res) => {
    const movieName = req.query.search;
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=thewdb`;

    request(url, (error, response, body) => {

        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);

        const data = JSON.parse(body);
        console.log('body:', data);

            //res.render("/results.ejs", {movie: movieName});
        res.render("results.ejs", {data: data});
    });

});


app.listen(3000, "localhost", () => console.log("App is running.."));