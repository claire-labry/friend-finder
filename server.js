// Dependencies 

var express = require('express');
var path = require ('path');
// Sets + runs the express app
var app = express();

// Creates the initial PORT 
var PORT = process.env.PORT || 3000;

// To enable Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routes for Friend Finder

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// PORT Listener

app.listen(PORT, function(){
    console.log('App is listening on PORT: ' + PORT);
})