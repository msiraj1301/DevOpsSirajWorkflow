const express = require("express");
const app = express();

app.get("/api/user", (req, res) => {
    res.json({
        name: "Sohaib",
        age: 19
    });
});


 module.exports = app;      