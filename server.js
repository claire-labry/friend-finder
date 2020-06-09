// Dependencies

var express = require('express');
var path = require('path');
// Sets + runs the express app
var app = express();

// Creates the initial PORT
var PORT = process.env.PORT || 3000;

// To enable Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

// Routes for Friend Finder

require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// PORT Listener

app.listen(PORT, function () {
  console.log('App is listening on PORT: ' + PORT);
});

// Improvements for Future Deployment
// Ensure that user can upload their images when take survey
// Have user's photo show up next to new friend
// hardcode more new friends to data for matching
// Add 'Home' button to modal
// Fix limited survey results to become more variable
// Turn this app into a full MERN application
