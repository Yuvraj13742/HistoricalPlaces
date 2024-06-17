const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/raj", (req, res) => {
    res.render("raj");
});

app.get("/up", (req, res) => {
    res.render("up");
});

app.get("/delhi", (req, res) => {
    res.render("delhi");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
