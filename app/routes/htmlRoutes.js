// Dependencies

var path = require('path');

// Routes 

module.exports = function(app){

    // GET requests

    // Need to figure out why my path to survey is not working. 
    
    app.get('/survey.html', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('/*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}
