// Loads the data
var friendsData = require('../data/friends');

// Routes

module.exports = function (app){
    app.get('/api/friends', function(req,res){
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res){
      
      let newFriend = {
        name: req.body.name,
        photo: req.body.img,
        scores: [
          req.body.q0,
          req.body.q1,
          req.body.q2,
          req.body.q3,
          req.body.q4,
          req.body.q5,
          req.body.q6,
          req.body.q7,
          req.body.q8,
          req.body.q9,
        ]
      }
      friendsData.push(newFriend);
      res.json(friendsData);


      // Send a request/response to match the newFriend with friends the friendsData

    });
};