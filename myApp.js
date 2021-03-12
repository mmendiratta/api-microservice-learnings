var express = require('express');
var app = express();

console.log("Hello world!");

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    console.log("req ", req)
    console.log("res ", res)
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (res) => {
    var message = {"message": "Hello json"};
   
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message.message.toUpperCase();
    }
    res.json(message);
})
    

 module.exports = app;
