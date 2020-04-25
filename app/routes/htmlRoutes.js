// Dependencies

var path = require('path');

// Routes 

module.exports = function(app){

    // GET requests

    app.get('/home', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    })
}
